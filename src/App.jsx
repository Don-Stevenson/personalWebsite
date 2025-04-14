import React from "react"
import "../styles/globals.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import Navbar from "./components/NavBar/NavBar"

export default function App() {
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
      <Routes>
        <Route
          path="/"
          exact
          element={
            <HomePage
              title={home.title}
              subTitle={home.subTitle}
              text={home.text}
            />
          }
        />
        <Route path="/about" element={<AboutPage title={about.title} />} />
        <Route
          path="/contact"
          element={<ContactPage title={contact.title} />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}
