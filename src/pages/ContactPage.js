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
  border-radius: 4px;
  border: 1px solid #ced4da;
  width: 100%;
`

const Success = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 0.8rem;
  color: #9ad19a;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
              <label htmlFor="full-name">Name</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="message">Message</label>
              <FormBox
                id="message"
                name="message"
                rows="3"
                value={state.message}
                onChange={handleChange}
                required
              />
            </FormWrapper>

            {errors.message && <p>{errors.message}</p>}

            <p>Note: please allow up to 10 seconds for the email to send</p>

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
