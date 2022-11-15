import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Hero from "../components/Hero"
import Content from "../components/Content"
import Useform from "../../src/UseForm"

// contact page
// ************
export default function ContactPage({title}) {
  const { handleSubmit, handleChange, state, errors } = Useform()

  return (
    <div>
      <Hero title={title} />
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
              required
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
              required
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
              required
            />
          </Form.Group>
          {errors.message && <p>{errors.blank}</p>}
          <p>Note: please allow up to 10 seconds for the email to send</p>
          <Button
            className="d-inline-block"
            variant="outline-primary"
            type="submit"
            disabled={state.disabled}
          >
            Send
          </Button>

          {state.emailSent && (
            <p className="d-inline d-sucess-msg"> Email Sent!</p>
          )}
        </Form>
      </Content>
    </div>
  )
}
