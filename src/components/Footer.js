import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// displaying the year based on new Date method
//*********************************************
const year = new Date().toLocaleDateString("en-US", { year: "numeric" });

// returns the footer
// ******************
export default function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            {/* Don Stevenson Web Developer */}
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
             This site made by Don Stevenson © {year}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
