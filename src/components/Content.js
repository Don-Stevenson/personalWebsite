import React from "react"
import styled from "styled-components"
const Container = styled.div`
  margin: 2rem;
  padding: 2rem;
`
const Row = styled.div`
  margin: 2rem;
  padding: 2rem;
`
const Col = styled.div`
  margin: 2rem;
  padding: 2rem;
`

export default function Content({ children }) {
  return (
    <Container>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  )
}
