import { Axios } from "axios"
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
    setErrors(state)
    event.preventDefault()
    setState({ ...state, disabled: true })
    try {
      const dataSent = await Axios.post(
        // to do: add ternary to check if on local or production
        // to do: clear form after sending email
        // "http://localhost:3030/api/email",
        "https://donpersonalwebsite-api.herokuapp.com/api/email",
        state
      )

      dataSent.data.success
        ? setState({
            ...state,
            disabled: false,
            emailSent: true,
            name: "",
            email: "",
            message: "",
          })
        : setState({ ...state, disabled: false, emailSent: false })
    } catch (error) {
      console.error(error)
      setState({ ...state, disabled: false, emailSent: false })
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
