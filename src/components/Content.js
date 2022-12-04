import React from "react"
import styled from "styled-components"
const Container = styled.div`margin: 2rem;
padding: 2rem;
`
const Row = styled.div`margin: 2rem;
padding: 2rem;
`
const Col = styled.div`margin: 2rem;
padding: 2rem;
`

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
