import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import styled from "styled-components"
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"

const Container = styled.div`
  margin: 2rem;
  padding: 2rem;
`
const Navbar = styled.div`
  margin: 2rem;
  padding: 2rem;
`
const Nav = styled.div`
  margin: 2rem;
  padding: 2rem;
`
const App = () => {
  const [home] = useState({
    title: "Keep Learning.",
    subTitle: "Projects that make a difference",
    text: "Checkout my work below",
  })
  const [about] = useState({ title: "About Me." })
  const [contact] = useState({ title: "Talk to Me." })

  return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar>Don Stevenson - Web Developer</Navbar>
          <Navbar className="border-0" aria-controls="navbar-toggle" />
          <Navbar id="navbar-toggle">
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
          </Navbar>
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
        <Route path="/about" render={() => <AboutPage title={about.title} />} />
        <Route
          path="/contact"
          render={() => <ContactPage title={contact.title} />}
        />
        <Footer></Footer>
      </Container>
    </Router>
  )
}

export default App
