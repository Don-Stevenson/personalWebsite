import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const [home] = useState({
    title: "Keep Learning.",
    subTitle: "Projects that make a difference",
    text: "Checkout my work below."
  });
  const [about] = useState({ title: "About Me" });
  const [contact] = useState({ title: "Talk to Me" });

  return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
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
        <Route
          path="/"
          exact
          render={() => (
            <HomePage
              title={home.title}
              subTitle={home.subTitle}
              text={home.text}
            />
          )}
        />
        <Route
          path="/about"
          render={() => <AboutPage title={about.title} />}
        />
        <Route
          path="/contact"
          render={() => <ContactPage title={contact.title} />}
        />
        <Footer></Footer>
      </Container>
    </Router>
  );
};


export default App;
