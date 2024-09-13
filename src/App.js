import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import Navbar from "./components/NavBar/NavBar"

const App = () => {
  const home = {
    title: "Keep Learning.",
    subTitle: "Projects that make a difference",
    text: "Checkout my work below",
  }
  const about = { title: "About Me." }
  const contact = { title: "Talk to Me." }

  return (
    <Router>
      <Navbar />
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
    </Router>
  )
}

export default App
