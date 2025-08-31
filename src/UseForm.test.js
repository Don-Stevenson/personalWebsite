import { renderHook, act } from "@testing-library/react"
import useForm from "./UseForm"
import axios from "axios"

// Mock axios
jest.mock("axios")

describe("useForm hook", () => {
  let consoleErrorSpy

  beforeEach(() => {
    jest.clearAllMocks()
    // Spy on console.error to suppress expected error messages
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {})
  })

  afterEach(() => {
    // Restore console.error after each test
    consoleErrorSpy.mockRestore()
  })

  test("initial form state is correct", () => {
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

  test("handleInputChange updates form state correctly", () => {
    const { result } = renderHook(() => useForm())

    act(() => {
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
    const { result } = renderHook(() => useForm())

    await act(async () => {
      await result.current.handleFormSubmit({ preventDefault: () => {} })
    })

    expect(result.current.validationErrors).toEqual({
      name: "Name is required",
      email: "Email is required",
      message: "Message is required",
    })
  })

  test("form validation on invalid email", async () => {
    const { result } = renderHook(() => useForm())

    act(() => {
      result.current.handleInputChange({
        target: {
          name: "email",
          value: "invalid-email",
        },
      })
    })

    await act(async () => {
      await result.current.handleFormSubmit({ preventDefault: () => {} })
    })

    expect(result.current.validationErrors.email).toBe(
      "Please enter a valid email address",
    )
  })

  test("handleFormSubmit successfully sends email", async () => {
    const { result } = renderHook(() => useForm())

    // Mock successful axios response
    axios.post.mockResolvedValueOnce({ data: { success: true } })

    // Fill form with valid data
    act(() => {
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
    })

    // Submit form
    await act(async () => {
      await result.current.handleFormSubmit({ preventDefault: () => {} })
    })

    expect(axios.post).toHaveBeenCalledWith(
      "/api/email",
      expect.objectContaining({
        name: "John Doe",
        email: "john@example.com",
        message: "Hello world",
      }),
    )

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

    // Mock failed axios response
    axios.post.mockRejectedValueOnce(new Error("API Error"))

    // Fill form with valid data
    act(() => {
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
    })

    // Submit form
    await act(async () => {
      await result.current.handleFormSubmit({ preventDefault: () => {} })
    })

    expect(result.current.validationErrors.message).toBe(
      "😥 Oops! Failed to send the message",
    )
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
    act(() => {
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
    })

    // Start submission and check initial state
    await act(async () => {
      result.current.handleFormSubmit({ preventDefault: () => {} })
    })

    // Check state immediately after submission starts
    expect(result.current.formState.isDisabled).toBe(true)
    expect(result.current.isSending).toBe(true)

    // Wait for the minimum submission duration (3 seconds)
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 3100))
    })

    // Check final state after submission completes
    expect(result.current.formState.isDisabled).toBe(false)
    expect(result.current.isSending).toBe(false)
    expect(result.current.formState.emailSent).toBe(true)
  })
})
