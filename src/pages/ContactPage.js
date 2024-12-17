import React from "react"
import styled from "styled-components"
import Hero from "../components/Hero/Hero"
import Useform from "../../src/UseForm"
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
`
const FormBox = styled.textarea`
  display: block;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  width: 100%;
  font-size: 1rem;
`
const Text = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1rem;
  color: #5a5a5a;
`
const Label = styled.label`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1rem;
  color: #5a5a5a;
`
const Success = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 0.9rem;
  color: #9ad19a;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 16rem;
  margin-bottom: 1rem;
  @media ${devices.sm} {
    width: 25rem;
  }
  @media ${devices.md} {
    width: 45rem;
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  border: 1.5px solid;
  color: #007bff;
  padding: 5px;
  border-color: #007bff;
  border-radius: 4px;
  width: 3rem;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Wrapper = styled.div`
  margin-right: 6rem;
  margin-left: 2.5rem;
`

export default function ContactPage({ title }) {
  const { handleSubmit, handleChange, state, errors } = Useform()
  return (
    <PageContainer>
      <Hero title={title} />
      <ContentWrapper>
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <FormWrapper>
              <Label htmlFor="full-name">Name</Label>
              <FormBox
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
              <FormBox
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
              <FormBox
                id="message"
                name="message"
                rows="3"
                value={state.message}
                onChange={handleChange}
                required
              />
            </FormWrapper>

            {errors.message && <Text>{errors.message}</Text>}

            <Text>
              Note: please allow up to 10 seconds for the email to send
            </Text>

            <Button type="submit" disabled={state.disabled}>
              Send
            </Button>

            {state.emailSent && <Success>Email Sent!</Success>}
          </form>
        </Wrapper>
      </ContentWrapper>
    </PageContainer>
  )
}
