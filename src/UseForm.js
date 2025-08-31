import { useState } from "react"
import axios from "axios"

const useForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    isDisabled: false,
    emailSent: null,
  })

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSending, setIsSending] = useState(false)

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }))

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const errors = {
      name: "",
      email: "",
      message: "",
    }

    let isValid = true

    if (!formState.name.trim()) {
      errors.name = "Name is required"
      isValid = false
    }

    if (!formState.email.trim()) {
      errors.email = "Email is required"
      isValid = false
    } else if (!validateEmail(formState.email)) {
      errors.email = "Please enter a valid email address"
      isValid = false
    }

    if (!formState.message.trim()) {
      errors.message = "Message is required"
      isValid = false
    }

    setValidationErrors(errors)
    return isValid
  }

  const handleFormSubmit = async e => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSending(true)
    setFormState(prev => ({ ...prev, isDisabled: true }))

    try {
      const response = await axios.post("/api/email", {
        name: formState.name,
        email: formState.email,
        message: formState.message,
      })

      if (response.data.success) {
        // Reset form on success
        setFormState({
          name: "",
          email: "",
          message: "",
          isDisabled: false,
          emailSent: true,
        })
        setValidationErrors({
          name: "",
          email: "",
          message: "",
        })
      }
    } catch (error) {
      console.error("Failed to send email:", error)
      setValidationErrors(prev => ({
        ...prev,
        message: "😥 Oops! Failed to send the message",
      }))
      setFormState(prev => ({
        ...prev,
        emailSent: false,
        isDisabled: false,
      }))
    }

    // Ensure minimum loading time of 3 seconds
    setTimeout(() => {
      setIsSending(false)
      setFormState(prev => ({ ...prev, isDisabled: false }))
    }, 3000)
  }

  return {
    formState,
    validationErrors,
    isSending,
    handleInputChange,
    handleFormSubmit,
  }
}

export default useForm
