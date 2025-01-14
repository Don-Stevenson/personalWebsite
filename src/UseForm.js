import axios from "axios"
import { useState } from "react"

const useForm = () => {
  const [errors, setErrors] = useState({ email: "", name: "", message: "" })

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
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const newErrors = {
      name: state.name ? "" : "Name is required",
      email: state.email ? "" : "Email is required",
      message: state.message ? "" : "Message is required",
    }

    setErrors(newErrors)

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setState(prev => ({ ...prev, disabled: true }))

      try {
        const response = await axios.post(
          "https://personalwebsite-api.onrender.com/api/email",
          state
        )

        if (response.data.success) {
          setState(prev => ({
            ...prev,
            emailSent: true,
            disabled: false,
          }))

          // Clear form fields after a delay to allow useEffect to trigger
          setTimeout(() => {
            setState(prev => ({
              ...prev,
              name: "",
              email: "",
              message: "",
            }))
          }, 0)
        } else {
          setState(prev => ({
            ...prev,
            disabled: false,
            emailSent: false,
          }))
        }
      } catch (error) {
        console.error(error)
        setState(prev => ({
          ...prev,
          disabled: false,
          emailSent: false,
        }))
      }
    }
  }
  return {
    handleChange,
    handleSubmit,
    state,
    errors,
  }
}

export default useForm
