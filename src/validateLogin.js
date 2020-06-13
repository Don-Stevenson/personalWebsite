//handling the errors
//******************

const validateLogin = values => {
  let errors = {};
  if (!values.email || !values.name || !values.message) {
    errors.blank = "Warning. Field cannot be left blank";

    // using a reg ex to validate if an email is valid or not.
    //****************************************************** */
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "This email address is invalid. Please try another";
  }
  return errors;
};
export default validateLogin;
