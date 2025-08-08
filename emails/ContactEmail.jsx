// emails/ContactEmail.jsx
import { Html, Body, Container, Text, Heading } from "@react-email/components"

export default function ContactEmail({ name, email, message }) {
  return (
    <Html>
      <Body style={{ fontFamily: "Arial, sans-serif" }}>
        <Container>
          <Heading>New Contact Form Message</Heading>
          <Text>
            <strong>From:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Message:</strong>
          </Text>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  )
}
