import React from "react"
import { Container, Row, Col, Title, SubTitle1, SubTitle2 } from "./style"

// These are the imports above and bellow is the react component.

// function that returns the homepage title, subtitle and text
// ***********************************************************

export default function Hero({ title, subTitle, text }) {
  return (
    <Container>
      <Row>
        <Col>
          {title && <Title>{title}</Title>}
          {subTitle && <SubTitle1>{subTitle}</SubTitle1>}
          {text && <SubTitle2>{text}</SubTitle2>}
        </Col>
      </Row>
    </Container>
  )
}
