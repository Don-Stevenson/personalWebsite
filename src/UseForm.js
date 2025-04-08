import axios from "axios"
import { useState } from "react"

const useForm = () => {
  const [errors, setErrors] = useState({ email: "", name: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null,
  })

  const handleChange = event => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const newErrors = {
      name: state.name.trim() ? "" : "Name is required",
      message: state.message.trim() ? "" : "Message is required",
      email: "",
    }

    if (!state.email.trim()) {
      newErrors.email = "Email is required"
      newErrors.email = "Please enter a valid email address"
      setState(prev => ({
        ...prev,
        disabled: false,
        emailSent: false,
      }))
      setIsSubmitting(false)
    } else if (!validateEmail(state.email)) {
      newErrors.email = "Please enter a valid email address"
      setState(prev => ({
        ...prev,
        disabled: false,
        emailSent: false,
      }))
      setIsSubmitting(false)
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error !== "")
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setIsSubmitting(true)

    if (!validateForm()) {
      return
    }

    setState(prev => ({ ...prev, disabled: true }))

    try {
      const response = await axios.post(
        "https://personalwebsite-api.onrender.com/api/email",
        state
      )

      if (response.data.success) {
        setState(prev => ({
          name: "",
          email: "",
          message: "",
          disabled: false,
          emailSent: true,
        }))
        setIsSubmitting(false)
      } else {
        setState(prev => ({
          ...prev,
          disabled: false,
          emailSent: false,
        }))
      }
    } catch (error) {
      console.error("😥 Oops! Failed to send message:", error)
      setErrors({ message: "😥 Oops! Failed to send the message" })
      setState(prev => ({
        ...prev,
        disabled: false,
        emailSent: false,
      }))
      setIsSubmitting(false)
    }
  }

  return {
    handleChange,
    handleSubmit,
    state,
    errors,
    isSubmitting,
  }
}

export default useForm
