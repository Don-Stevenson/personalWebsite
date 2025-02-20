import React from "react"
import Hero from "../components/Hero/Hero"
import Useform from "../UseForm"
import styled from "styled-components"
import { devices } from "../utils/constants"
import { Blocks } from "react-loader-spinner"

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
    margin-left: 3rem;
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

const TextLightGrey = styled.p`
  ${baseTextStyles}
  font-size: 1rem;
  color: rgb(194, 194, 194);
  font-size: 0.8rem;
  margin: 0.5rem 0 0.5rem;
  width: 10rem;
  @media ${devices.sm} {
    width: 100%;
    width: 18rem;
  }
  @media ${devices.md} {
    width: 25rem;
  }
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
const ErrorText = styled.p`
  ${baseTextStyles}
  font-size: 0.8rem;
  color: #ff0000;
  width: 100%;
  margin: 0;
  width: 18rem;
  @media ${devices.sm} {
    width: 100%;
  }
`
const PlaceHolderText = styled.p`
  ${baseTextStyles}
  font-size: 0.8rem;
  color: #ffffff;
  width: 100%;
  margin: 0;
  width: 18rem;
  @media ${devices.sm} {
    width: 100%;
  }
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
  align-items: center;
  border: 1.5px solid #007bff;
  color: #007bff;
  background-color: rgb(243, 249, 255);
  border-radius: 4px;
  width: 3rem;
  height: 2rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
const SubmittingWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`

const ContactPage = ({ title }) => {
  const { handleSubmit, handleChange, state, errors, isSubmitting } = Useform()

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
          {errors.email ? (
            <ErrorText>{errors.email}</ErrorText>
          ) : (
            !errors.email && (
              <PlaceHolderText>placeholderText placeholderText</PlaceHolderText>
            )
          )}
          <SubmittingWrapper>
            <SubmitButton type="submit" disabled={state.disabled}>
              Send
            </SubmitButton>
            {isSubmitting && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Blocks
                  height="35"
                  width="35"
                  color="#007bff"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  visible={true}
                />
                <TextLightGrey>
                  Please allow up to 30 seconds for the message to send
                </TextLightGrey>
              </div>
            )}
          </SubmittingWrapper>
          {state.emailSent && <SuccessMessage>Message Sent!</SuccessMessage>}
        </form>
      </ContentWrapper>
    </PageContainer>
  )
}

export default ContactPage
