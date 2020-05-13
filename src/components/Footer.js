import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const year = new Date().toLocaleDateString("en-US", { year: "numeric" });
console.log(()=> year);

export default function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            {/* Don Stevenson */}
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            © {year} Don Stevenson
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
