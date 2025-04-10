import axios from "axios"
import { useState } from "react"

const useForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isDisabled: false,
    emailSent: null,
  })

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const handleChange = event => {
    const { name, value } = event.target

    setFormData(prevData => ({ ...prevData, [name]: value }))

    if (formErrors[name]) {
      setFormErrors(prevErrors => ({ ...prevErrors, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() ? "" : "Name is required",
      message: formData.message.trim() ? "" : "Message is required",
      email: "",
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      setFormData(prev => ({
        ...prev,
        isDisabled: false,
        emailSent: false,
      }))
      setIsSubmitting(false)
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      setFormData(prev => ({
        ...prev,
        isDisabled: false,
        emailSent: false,
      }))
      setIsSubmitting(false)
    }

    setFormErrors(newErrors)

    const isError = !Object.values(newErrors).some(error => error !== "")
    return isError
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setIsSubmitting(true)

    const startTime = Date.now()

    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    setFormData(prev => ({ ...prev, isDisabled: true }))

    try {
      const response = await axios.post(
        "https://personalwebsite-api.onrender.com/api/email",
        formData
      )

      const elapsedTime = Date.now() - startTime
      const minLoadingTime = 3000 // 3 seconds in milliseconds

      if (elapsedTime < minLoadingTime) {
        await new Promise(resolve =>
          setTimeout(resolve, minLoadingTime - elapsedTime)
        )
      }

      if (response.data.success) {
        setFormData({
          name: "",
          email: "",
          message: "",
          isDisabled: false,
          emailSent: true,
        })
        setIsSubmitting(false)

        setTimeout(() => {
          setFormData(prev => ({
            ...prev,
            emailSent: null,
          }))
        }, 5000)
      } else {
        setFormData(prev => ({
          ...prev,
          isDisabled: false,
          emailSent: false,
        }))
        setIsSubmitting(false)
      }
    } catch (error) {
      const elapsedTime = Date.now() - startTime
      const minLoadingTime = 3000

      if (elapsedTime < minLoadingTime) {
        await new Promise(resolve =>
          setTimeout(resolve, minLoadingTime - elapsedTime)
        )
      }

      console.error("😥 Oops! Failed to send message:", error)
      setFormErrors(prev => ({
        ...prev,
        message: "😥 Oops! Failed to send the message",
      }))
      setFormData(prev => ({
        ...prev,
        isDisabled: false,
        emailSent: false,
      }))
      setIsSubmitting(false)
    }
  }

  return {
    handleChange,
    handleSubmit,
    formData,
    formErrors,
    isSubmitting,
  }
}

export default useForm
