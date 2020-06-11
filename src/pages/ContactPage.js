import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";

import Axios from "axios";

export default function ContactPage(props) {
  // Setting the default state
  //**************************
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null
  });

  // handling the changes made on the input fields
  //*********************************************/
  const handleChange = event => {
    // the input of the element selected
    //*********************************/
    const value = event.target.value;

    // the box selected, i.e. email, name, message
    //********************************************/
    const boxName = event.target.name;

    //goes through the different box names and displays the input value
    //*****************************************************************/
    setState({ ...state, [boxName]: value });
  };

  //function that handles sending the email through the backend
  // **********************************************************
  async function handleSubmit(event) {
    // prevents the browser being reloaded upon hiting the send button
    //*********************************/
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

  // // handleSubmit = (event) => {
  //   event.preventDefault();

  //   console.log(event.target);

  //   this.setState({
  //       disabled: true
  //   });

  //   Axios.post('http://localhost:3030/api/email', this.state)
  //       .then(res => {
  //           if(res.data.success) {
  //               this.setState({
  //                   disabled: false,
  //                   emailSent: true
  //               });
  //           } else {
  //               this.setState({
  //                   disabled: false,
  //                   emailSent: false
  //               });
  //           }
  //       })
  //       .catch(err => {
  //           console.log(err);

  //           this.setState({
  //               disabled: false,
  //               emailSent: false
  //           });
  //       })

  // }

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
            //returns a success / failue messagge to the screen after emailing
            // ***************************************************************
          }

          {state.emailSent === true && (
            <p className="d-inline d-sucess-msg"> Email Sent!</p>
          )}
          {state.emailSent === false && (
            <p className="d-inline d-err-msg"> Email Not Sent! </p>
          )}
        </Form>
      </Content>
    </div>
  );
}
