"use client"
import axios from "axios"
import { useState } from "react"

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

  const isValidEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const handleInputChange = event => {
    const { name, value } = event.target

    setFormState(prevData => ({ ...prevData, [name]: value }))

    if (validationErrors[name]) {
      setValidationErrors(prevErrors => ({ ...prevErrors, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: formState.name.trim() ? "" : "Name is required",
      message: formState.message.trim() ? "" : "Message is required",
      email: "",
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
      setFormState(prev => ({
        ...prev,
        isDisabled: false,
        emailSent: false,
      }))
      setIsSending(false)
    } else if (!isValidEmail(formState.email)) {
      newErrors.email = "Please enter a valid email address"
      setFormState(prev => ({
        ...prev,
        isDisabled: false,
        emailSent: false,
      }))
      setIsSending(false)
    }

    setValidationErrors(newErrors)

    return !Object.values(newErrors).some(error => error !== "")
  }

  const handleFormSubmit = async event => {
    event.preventDefault()
    setIsSending(true)

    const submissionStartTime = Date.now()

    if (!validateForm()) {
      setIsSending(false)
      return
    }

    setFormState(prev => ({ ...prev, isDisabled: true }))

    try {
      const response = await axios.post("/api/email", formState)

      const elapsedTime = Date.now() - submissionStartTime
      const minSendingDuration = 3000

      if (elapsedTime < minSendingDuration) {
        await new Promise(resolve =>
          setTimeout(resolve, minSendingDuration - elapsedTime),
        )
      }

      if (response.data.success) {
        setFormState({
          name: "",
          email: "",
          message: "",
          isDisabled: false,
          emailSent: true,
        })
        setIsSending(false)

        setTimeout(() => {
          setFormState(prev => ({
            ...prev,
            emailSent: null,
          }))
        }, 5000)
      } else {
        setFormState(prev => ({
          ...prev,
          isDisabled: false,
          emailSent: false,
        }))
        setIsSending(false)
      }
    } catch (error) {
      const elapsedTime = Date.now() - submissionStartTime
      const minSendingDuration = 3000

      if (elapsedTime < minSendingDuration) {
        await new Promise(resolve =>
          setTimeout(resolve, minSendingDuration - elapsedTime),
        )
      }

      console.error("😥 Oops! Failed to send message:", error)
      setValidationErrors(prev => ({
        ...prev,
        message: "😥 Oops! Failed to send the message",
      }))
      setFormState(prev => ({
        ...prev,
        isDisabled: false,
        emailSent: false,
      }))
      setIsSending(false)
    }
  }

  return {
    handleInputChange,
    handleFormSubmit,
    formState,
    validationErrors,
    isSending,
  }
}

export default useForm
