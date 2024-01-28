import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import styled from "styled-components"
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import Navbar from "./components/NavBar/NavBar"

const Container = styled.div`
  margin: 2rem;
  padding: 2rem;
`

const App = () => {
  const [home] = useState({
    title: "Keep Learning.",
    subTitle: "Projects that make a difference",
    text: "Checkout my work below"
  })
  const [about] = useState({ title: "About Me." })
  const [contact] = useState({ title: "Talk to Me." })

  return (
    <Router>
      <Navbar />
      <Container className="p-0" fluid={true}>
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
        <Footer />
      </Container>
    </Router>
  )
}

export default App
