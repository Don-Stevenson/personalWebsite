import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";

import Axios from "axios";

const ContactPage = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(null);

  // this.state = {
  //   name: "",
  //   email: "",
  //   message: "",
  //   disabled: false,
  //   emailSent: null
  // };

  // handling the changes made on the input fields
  //*********************************************/
  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const names = target.name;

    setName(...value, value);
    console.log(`value is: ${value}
    name is: ${names}
    `  )
    
    // this.setState({
    //   [name]: value
    // });
  };

  const handleSubmit = event => {
    // prevents blank emails being sent
    //*********************************/
    event.preventDefault();

    // prevents multiple inadvertent emails to be sent
    // **********************************************/
    setDisabled(true);

    // handling the email being sent
    //********************************************/
    // Axios.post("http://localhost:3030/api/email", this.state)
    Axios.post("http://localhost:3030/api/email")
      .then(res => {
        if (res.data.success) {
          setDisabled(false);
          setEmailSent(true);
        } else {
          setDisabled(false);
          setEmailSent(false);

          // this.setState({
          //   disabled: false,
          //   emailSent: false
          // });
        }
      })
      .catch(err => {
        console.error(err);
        setDisabled(false);
        setEmail(false);
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
              value={setName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              value={setEmail}
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
              value={setMessage}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            className="d-inline-block"
            variant="outline-primary"
            type="submit"
            disabled={setDisabled}
          >
            Send
          </Button>

          {
            //returns a messagge after emailing
          }

          {emailSent === true && (
            <p className="d-sucess-msg"> Email Sent!</p>
          )}
          {emailSent === false && (
            <p className="d-err-msg"> Email Not Sent! </p>
          )}
        </Form>
      </Content>
    </div>
  );
};

export default ContactPage;
