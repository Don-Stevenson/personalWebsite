import React from "react"
import Hero from "../components/Hero/Hero"
import Useform from "../../src/UseForm"
import styled from "styled-components"
import { devices } from "../utils/constants"

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-right: 6rem;
  margin-left: 1rem;

  @media ${devices.sm} {
    margin-left: 2rem;
  }

  @media ${devices.md} {
    margin-left: 2rem;
  }
`

const FormInput = styled.textarea`
  display: block;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  width: 100%;
  font-size: 1rem;
`

const baseTextStyles = `
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`

const Text = styled.p`
  ${baseTextStyles}
  font-size: 1rem;
  color: #5a5a5a;
`

const Label = styled.label`
  ${baseTextStyles}
  font-size: 1rem;
  color: #5a5a5a;
`

const SuccessMessage = styled.p`
  ${baseTextStyles}
  font-size: 0.9rem;
  color: #9ad19a;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 15rem;
  max-width: 20rem;
  margin-bottom: 1rem;

  @media ${devices.sm} {
    min-width: 20rem;
    max-width: 30rem;
  }

  @media ${devices.md} {
    max-width: 35rem;
  }
`

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  border: 1.5px solid #007bff;
  color: #007bff;
  padding: 5px;
  border-radius: 4px;
  width: 3rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ContactPage = ({ title }) => {
  const { handleSubmit, handleChange, state, errors } = Useform()

  return (
    <PageContainer>
      <Hero title={title} />
      <ContentWrapper>
        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <Label htmlFor="full-name">Name</Label>
            <FormInput
              as="input"
              id="full-name"
              name="name"
              type="text"
              value={state.name}
              onChange={handleChange}
              required
            />
          </FormWrapper>

          <FormWrapper>
            <Label htmlFor="email">Email</Label>
            <FormInput
              as="input"
              id="email"
              name="email"
              type="email"
              value={state.email}
              onChange={handleChange}
              required
            />
          </FormWrapper>

          <FormWrapper>
            <Label htmlFor="message">Message</Label>
            <FormInput
              as="input"
              id="message"
              name="message"
              rows="3"
              value={state.message}
              onChange={handleChange}
              required
            />
          </FormWrapper>

          {errors.message && <Text>{errors.message}</Text>}

          <Text>Note: please allow up to 20 seconds for the email to send</Text>

          <SubmitButton type="submit" disabled={state.disabled}>
            Send
          </SubmitButton>

          {state.emailSent && <SuccessMessage>Email Sent!</SuccessMessage>}
        </form>
      </ContentWrapper>
    </PageContainer>
  )
}

export default ContactPage
