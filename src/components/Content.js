import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// creates a custom wrapper that we can use elsewhere to wrap and style text
// **************************************************************************/

export default function Content({ children }) {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={8}>{children}</Col>
      </Row>
    </Container>
  )
}
