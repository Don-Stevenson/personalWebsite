import React from "react"
import styled from "styled-components";

const Jumbotron = styled.div`padding:4 rem;`
const Container = styled.div`padding:4 rem;`
const Row = styled.div`padding:4 rem;`
const Col = styled.div`padding:4 rem;`

// function that returns the homepage title, subtitle and text
// ***********************************************************

export default function Hero({ title, subTitle, text }) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {title && <h1 className="display-1 font-weight-bolder">{title}</h1>}
            {subTitle && (
              <h3 className="display-4 font-weight-light">{subTitle}</h3>
            )}
            {text && <h3 className="lead font-weight-light">{text}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}
