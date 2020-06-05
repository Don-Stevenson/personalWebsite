import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";

import Axios from "axios";

const ContactPage = props => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null
  });
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [disabled, setDisabled] = useState(false);
  // const [emailSent, setEmailSent] = useState(null);

  // this.state = {
  //   name: "",
  //   email: "",
  //   message: "",
  //   disabled: false,
  //   emailSent: null
  // };

  // unction App() {
  //   const [state, setState] = useState({
  //     s: "",
  //     results: [],
  //     selected: {}
  //   });

  //   // insert better handling of the apiURL below
  //   //*******************************************/

  //   const apiURL = process.env.REACT_APP_MOVIE_API_KEY;

  //   // use setstate to take in the search query
  //   //****************************************/
  //   const handleInput = e => {
  //     let s = e.target.value;
  //     setState(prevState => {
  //       return { ...prevState, s: s };
  //     });
  //   };

  // handling the changes made on the input fields
  //*********************************************/
  const handleChange = event => {
    const target = event.target;
    console.log(() => "target is, ", target);
    const value = target.value;
    console.log(() => "value is, ", value);

    const boxName = target.name;
    console.log(() => "boxname is, ", boxName);

    setState(prevState => {
      return { ...prevState, [boxName]: value };
    });
  };
  //   console.log(`value is: ${value}
  //   name is: ${names}
  //   `  )
  //   })
  //   // this.setState({
  //   //   [name]: value
  //   // });
  // }

  const handleSubmit = event => {
    console.log(() => "event is :", event);
    // prevents blank emails being sent
    //*********************************/
    event.preventDefault();

    // prevents multiple inadvertent emails to be sent
    // **********************************************/
    setState(true);

    // handling the email being sent
    //********************************************/
    // Axios.post("http://localhost:3030/api/email", this.state)
    Axios.post("http://localhost:3030/api/email", event)
      .then(res => {
        if (res.data.success) {
          setState(prevState => {
            return { ...prevState, disabled: false, emailSent: true };
          });
        } else {
          setState(prevState => {
            return { ...prevState, disabled: false, emailSent: false };
          });

          // this.setState({
          //   disabled: false,
          //   emailSent: false
          // });
        }
      })
      .catch(err => {
        console.error(err);
        setState(prevState => {
          return { ...prevState, disabled: false, emailSent: false };
        });
        // this.setState({ disabled: false, email: false });
      });
  };

  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="full-name">Name</Form.Label>
            <Form.Control
              id="full-name"
              name="name"
              type="text"
              value={state.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              value={state.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              rows="3"
              value={state.message}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            className="d-inline-block"
            variant="outline-primary"
            type="submit"
            disabled={state.disabled}
          >
            Send
          </Button>

          {
            //returns a messagge after emailing
          }

          {state.emailSent === true && (
            <p className="d-sucess-msg"> Email Sent!</p>
          )}
          {state.emailSent === false && (
            <p className="d-err-msg"> Email Not Sent! </p>
          )}
        </Form>
      </Content>
    </div>
  );
};

export default ContactPage;
