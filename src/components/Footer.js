import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// storing the current year in a variable using the new Date method
//*********************************************
const year = new Date().toLocaleDateString("en-US", { year: "numeric" });

console.log("i", year)
// returns the footer
// ******************
export default function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col> </Col>
          <Col className="p-0 d-flex justify-content-end" md={3} sm={12} >
            Custom site by Don&nbsp;Stevenson ©&nbsp;{year}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
