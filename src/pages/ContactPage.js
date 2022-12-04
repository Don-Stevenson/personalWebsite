import React from "react"
import styled from "styled-components"
import Hero from "../components/Hero"
import Content from "../components/Content"
import Useform from "../../src/UseForm"
const Form = styled.div`padding:4 rem;`
const Button = styled.div`padding:4 rem;`

// contact page
// ************
export default function ContactPage({ title }) {
  const { handleSubmit, handleChange, state, errors } = Useform()

  return (
    <div>
      <Hero title={title} />
      <Content>
        <Form onSubmit={handleSubmit}>
          <Form>
            <Form htmlFor="full-name">Name</Form>
            <Form
              id="full-name"
              name="name"
              type="text"
              value={state.name}
              onChange={handleChange}
              required
            />
          </Form>
          {errors.name && <p>{errors.blank}</p>}

          <Form>
            <Form htmlFor="email">Email</Form>
            <Form
              id="email"
              name="email"
              type="email"
              value={state.email}
              onChange={handleChange}
              required
            />
          </Form>

          <Form>
            <Form htmlFor="message">Message</Form>
            <Form
              id="message"
              name="message"
              as="textarea"
              rows="3"
              value={state.message}
              onChange={handleChange}
              required
            />
          </Form>
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
