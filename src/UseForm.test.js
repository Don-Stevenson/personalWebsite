import { renderHook, act, waitFor, screen } from "@testing-library/react"
import useForm from "./UseForm"
import axios from "axios"

// Mock axios
jest.mock("axios")

describe("useForm hook", () => {
  let consoleErrorSpy

  beforeEach(() => {
    jest.clearAllMocks()
    // Spy on console.error to suppress expected error messages
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => { })
  })

  afterEach(() => {
    // Restore console.error after each test
    consoleErrorSpy.mockRestore()
  })

  test("initial form state is correct", async () => {
    const { result } = renderHook(() => useForm())

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
    const { result } = renderHook(() => useForm())

    result.current.handleInputChange({
      target: {
        name: "name",
        value: "John Doe",
      },
    })

    await waitFor(() => {
      expect(result.current.formState.name).toBe("John Doe")
    })
  })

  test("form validation on empty submission", async () => {
    const { result } = renderHook(() => useForm())

    await waitFor(() => {
      result.current.handleFormSubmit({ preventDefault: () => { } })
    })

    expect(result.current.validationErrors).toEqual({
      name: "Name is required",
      email: "Email is required",
      message: "Message is required",
    })
  })

  test("form validation on invalid email", async () => {
    const { result } = renderHook(() => useForm())

    result.current.handleInputChange({
      target: {
        name: "email",
        value: "invalid-email",
      },
    })
    result.current.handleInputChange({
      target: {
        name: "name",
        value: "John Doe",
      },
    })
    result.current.handleInputChange({
      target: {
        name: "message",
        value: "Hello world",
      },
    })

    await waitFor(() => {
      expect(result.current.formState.email).toBe("invalid-email")
    })

    await waitFor(async () => {
      await result.current.handleFormSubmit({ preventDefault: () => { } })
    })

    expect(result.current.validationErrors.email).toBe(
      "Please enter a valid email address",
    )
  })

  test("handleFormSubmit successfully sends email", async () => {
    const { result } = renderHook(() => useForm())

    // Fill form with valid data
    result.current.handleInputChange({
      target: {
        name: "name",
        value: "John Doe",
      },
    })
    result.current.handleInputChange({
      target: {
        name: "email",
        value: "john@example.com",
      },
    })
    result.current.handleInputChange({
      target: {
        name: "message",
        value: "Hello world",
      },
    })
    // Mock successful axios response
    await waitFor(() => {
      axios.post.mockResolvedValueOnce({ data: { success: true } })
    })
    // Submit form
    await result.current.handleFormSubmit({ preventDefault: () => { } })
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "/api/email",
        expect.objectContaining({
          name: "John Doe",
          email: "john@example.com",
          message: "Hello world",
        }),
      )
    })

    // Check form is reset after successful submission
    expect(result.current.formState).toEqual({
      name: "",
      email: "",
      message: "",
      isDisabled: false,
      emailSent: true,
    })
  })

  test("handleFormSubmit handles API error", async () => {
    const { result } = renderHook(() => useForm())

    // Fill form with valid data
    result.current.handleInputChange({
      target: {
        name: "name",
        value: "John Doe",
      },
    })
    result.current.handleInputChange({
      target: {
        name: "email",
        value: "john@example.com",
      },
    })
    result.current.handleInputChange({
      target: {
        name: "message",
        value: "Hello world",
      },
    })

    await waitFor(() => {
      expect(result.current.formState.name).toBe("John Doe")
      expect(result.current.formState.email).toBe("john@example.com")
      expect(result.current.formState.message).toBe("Hello world")
    })

    axios.post.mockRejectedValueOnce(new Error("API Error"))

    await result.current.handleFormSubmit({ preventDefault: () => { } })

    await waitFor(() => {
      expect(result.current.validationErrors.message).toBe(
        "😥 Oops! Failed to send the message",
      )
    })

    expect(result.current.formState.emailSent).toBe(false)
    expect(result.current.formState.isDisabled).toBe(false)
  })

  test("form is disabled during submission", async () => {
    const { result } = renderHook(() => useForm())

    // Mock successful axios response with delay
    axios.post.mockImplementation(
      () =>
        new Promise(resolve =>
          setTimeout(() => resolve({ data: { success: true } }), 100),
        ),
    )

    // Fill form with valid data
    result.current.handleInputChange({
      target: {
        name: "name",
        value: "John Doe",
      },
    })
    result.current.handleInputChange({
      target: {
        name: "email",
        value: "john@example.com",
      },
    })
    result.current.handleInputChange({
      target: {
        name: "message",
        value: "Hello world",
      },
    })
    await waitFor(() => {
      expect(result.current.formState.name).toBe("John Doe")
      expect(result.current.formState.email).toBe("john@example.com")
      expect(result.current.formState.message).toBe("Hello world")
    })

    // Now submit the form
    const submitPromise = result.current.handleFormSubmit({
      preventDefault: () => { },
    })


    // Wait for state to update after submission starts
    await waitFor(() => {
      expect(result.current.formState.isDisabled).toBe(true)
      expect(result.current.isSending).toBe(true)
    })

    // Wait for the minimum submission duration (3 seconds)
    await submitPromise

    // Check final state after submission completes
    await waitFor(() => {
      expect(result.current.formState.isDisabled).toBe(false)
      expect(result.current.isSending).toBe(false)
      expect(result.current.formState.emailSent).toBe(true)
    })
  })
})
