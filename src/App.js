import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Don Stevenson",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "about", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Never Stop Learning",
        subTitle: "Projects that make a difference",
        text: "Checkout my projects below"
      },
      about: {
        title: "About me"
      },
      contact: {
        title: "Talk to me"
      }
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom">
            <Navbar.Brand>Don Stevenson</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
