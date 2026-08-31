import { renderHook, waitFor, act } from "@testing-library/react"
import useForm from "../src/UseForm"
import axios from "axios"

jest.mock("axios")

const validFields = {
  name: "John Doe",
  email: "john@example.com",
  message: "Hello world",
}

async function fillForm(result, fields) {
  await act(async () => {
    for (const [name, value] of Object.entries(fields)) {
      result.current.handleInputChange({ target: { name, value } })
    }
  })

  await waitFor(() => {
    for (const [name, value] of Object.entries(fields)) {
      expect(result.current.formState[name]).toBe(value)
    }
  })
}

describe("useForm hook", () => {
  let consoleErrorSpy

  beforeEach(() => {
    jest.resetAllMocks()
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => { })
  })

  afterEach(() => {
    consoleErrorSpy.mockRestore()
  })

  test("initial form state is correct", () => {
    const { result } = renderHook(() => useForm({ minSendingDuration: 0 }))

    expect(result.current.formState).toEqual({
      name: "",
      email: "",
      message: "",
      isDisabled: false,
      emailSent: null,
    })

    expect(result.current.validationErrors).toEqual({
      name: "",
      email: "",
      message: "",
    })

    expect(result.current.isSending).toBe(false)
  })

  test("handleInputChange updates form state correctly", async () => {
    const { result } = renderHook(() => useForm({ minSendingDuration: 0 }))

    await act(async () => {
      result.current.handleInputChange({
        target: {
          name: "name",
          value: "John Doe",
        },
      })
    })

    expect(result.current.formState.name).toBe("John Doe")
  })

  test("form validation on empty submission", async () => {
    const { result } = renderHook(() => useForm({ minSendingDuration: 0 }))

    await act(async () => {
      await result.current.handleFormSubmit({ preventDefault: () => { } })
    })

    expect(result.current.validationErrors).toEqual({
      name: "Name is required",
      email: "Email is required",
      message: "Message is required",
    })
  })

  test("form validation on invalid email", async () => {
    const { result } = renderHook(() => useForm({ minSendingDuration: 0 }))

    await fillForm(result, {
      name: "John Doe",
      email: "invalid-email",
      message: "Hello world",
    })

    await act(async () => {
      await result.current.handleFormSubmit({ preventDefault: () => { } })
    })

    expect(result.current.validationErrors.email).toBe(
      "Please enter a valid email address",
    )
  })

  test("handleFormSubmit successfully sends email", async () => {
    axios.post.mockResolvedValueOnce({ data: { success: true } })

    const { result } = renderHook(() => useForm({ minSendingDuration: 0 }))
    await fillForm(result, validFields)

    await act(async () => {
      await result.current.handleFormSubmit({ preventDefault: () => { } })
    })

    expect(axios.post).toHaveBeenCalledWith(
      "/api/email",
      expect.objectContaining(validFields),
    )

    expect(result.current.formState).toEqual({
      name: "",
      email: "",
      message: "",
      isDisabled: false,
      emailSent: true,
    })
  })

  test("handleFormSubmit handles API error", async () => {
    axios.post.mockRejectedValueOnce(new Error("API Error"))

    const { result } = renderHook(() => useForm({ minSendingDuration: 0 }))
    await fillForm(result, validFields)

    await act(async () => {
      await result.current.handleFormSubmit({ preventDefault: () => { } })
    })

    expect(result.current.validationErrors.message).toBe(
      "😥 Oops! Failed to send the message",
    )
    expect(result.current.formState.emailSent).toBe(false)
    expect(result.current.formState.isDisabled).toBe(false)
  })

  test("form is disabled during submission", async () => {
    let resolvePost
    axios.post.mockImplementation(
      () =>
        new Promise(resolve => {
          resolvePost = resolve
        }),
    )

    const { result } = renderHook(() => useForm({ minSendingDuration: 0 }))
    await fillForm(result, validFields)

    let submitPromise
    await act(async () => {
      submitPromise = result.current.handleFormSubmit({
        preventDefault: () => { },
      })
    })

    await waitFor(() => {
      expect(result.current.formState.isDisabled).toBe(true)
      expect(result.current.isSending).toBe(true)
    })

    await act(async () => {
      resolvePost({ data: { success: true } })
      await submitPromise
    })

    expect(result.current.formState.isDisabled).toBe(false)
    expect(result.current.isSending).toBe(false)
    expect(result.current.formState.emailSent).toBe(true)
  })
})
