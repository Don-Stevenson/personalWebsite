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

// storing the current year in a variable using the new Date method
//*********************************************
const year = new Date().toLocaleDateString("en-US", { year: "numeric" })

// returns the footer
// ******************
export default function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col> </Col>
          <Col className="p-0 d-flex justify-content-end" md={3} sm={12}>
            Custom site by Don&nbsp;Stevenson ©&nbsp;{year}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
