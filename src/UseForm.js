import { useState } from "react";
import Axios from "axios";
import validateLogin from "./validateLogin";

// create a custom hook called useForm to handle submit and change
//***************************************************************/
const useForm = (cb) => {
  //setting the errors with usestate
  const [errors, setErrors] = useState({ email: "", name: "", message: "" });

  // Setting the default state
  //**************************
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null,
  });

  // handling the changes made on the input fields
  //*********************************************/
  const handleChange = (event) => {
    // the input of the element selected, with destructuring
    //*******************************************************/
    const { name, value } = event.target;

    //goes through the different box names and displays the input value
    //*****************************************************************/
    setState({ ...state, [name]: value });
  };

  //function that handles sending the email through the backend
  // **********************************************************
  async function handleSubmit(event) {
    // checking for errors in the form
    // *******************************
    setErrors(validateLogin(state));

    // prevents the browser being reloaded upon hiting the send button
    //***************************************************************/
    event.preventDefault();

    // prevents multiple inadvertent emails to be sent
    // **********************************************/
    setState({ ...state, disabled: true });

    // handling the email as an aysnc function sent using axios
    //*********************************************************
    try {
      const dataSent = await Axios.post(
        "http://localhost:3030/api/email",
        state
      );
      if (dataSent.data.success) {
        setState({ ...state, disabled: false, emailSent: true });
      } else {
        setState({ ...state, disabled: false, emailSent: false });
      }
    } catch (error) {
      console.error(error);
      setState({ ...state, disabled: false, emailSent: false });
    }
  }
  return {
    handleChange,
    handleSubmit,
    state,
    errors,
  };
};

export default useForm;
