import React from "react"
import { render, prettyDOM, screen } from "@testing-library/react"
import App from "./App"

describe("testing the homepage", () => {
  test("renders 'Keep Learning.' on the home page", () => {
    const { getByText } = render(<App />)
    const titleElement = getByText(/Keep Learning./i)
    expect(titleElement).toBeInTheDocument()
  })

  test("renders 'Home' link on the home page", () => {
    const { getByText } = render(<App />)
    const homeLink = getByText(/Home/i)
    expect(homeLink).toBeInTheDocument()
  })

  test("renders 'About' link on the home page", () => {
    const { getByText } = render(<App />)
    const aboutLink = getByText(/About/i)
    expect(aboutLink).toBeInTheDocument()
  })

  test("renders 'Contact' link on the home page", () => {
    const { getByText } = render(<App />)
    const contactLink = getByText(/Contact/i)
    expect(contactLink).toBeInTheDocument()
  })

  test("renders 'Custom site by Don Stevenson' link on the home page", () => {
    const { getByText } = render(<App />)
    const copywriteElement = getByText(/Custom site by Don Stevenson/i)
    expect(copywriteElement).toBeInTheDocument()
  })
})
