import React from "react"
import { Container, Row, Col, Jumbotron } from "./style"

// function that returns the homepage title, subtitle and text
// ***********************************************************

export default function Hero({ title, subTitle, text }) {
  return (
    <Container>
      <Row>
        <Col>
          {title && <Jumbotron>{title}</Jumbotron>}
          {subTitle && <h3>{subTitle}</h3>}
          {text && <h3>{text}</h3>}
        </Col>
      </Row>
    </Container>
  )
}
