import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Hero(props) {
  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col>
            {props.title && <h1>{props.title}</h1>}
            {props.subTitle && <h1>{props.subTitle}</h1>}
            {props.text && <h1>{props.text}</h1>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
