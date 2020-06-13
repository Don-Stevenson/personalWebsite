import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";

import Useform from "../../src/UseForm";
import validateLogin from "../../src/validateLogin";

export default function ContactPage(props) {
  const { handleSubmit, handleChange, state, errors } = Useform(validateLogin);
  console.log("here in the contact page errors are", errors.email)
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
          {errors.name && <p>{errors.blank}</p>}

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
          {errors.email && <p>{errors.email}</p>}

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
          {errors.message && <p>{errors.blank}</p>}

          <Button
            className="d-inline-block"
            variant="outline-primary"
            type="submit"
            disabled={state.disabled}
          >
            Send
          </Button>

          {
            //returns a conditional success / failue message to the screen after emailing
            // **************************************************************************
          }

          {state.emailSent && (
            <p className="d-inline d-sucess-msg"> Email Sent!</p>
          )}
          {!state.emailSent && (
            <p className="d-inline d-err-msg"> Email Not Sent! </p>
          )}
        </Form>
      </Content>
    </div>
  );
}
