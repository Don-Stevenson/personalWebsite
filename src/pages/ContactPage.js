import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";

import Useform from "../../src/UseForm";

export default function ContactPage(props) {
  const { handleSubmit, handleChange, state } = Useform;

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
