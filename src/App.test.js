import React from "react"
import {
  render,
  prettyDOM,
  screen,
  fireEvent,
  cleanup
} from "@testing-library/react"
import App from "./App"
import { act } from "react-dom/test-utils"

afterEach(() => {
  cleanup()
})

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

  test("renders 'Projects that make a difference' element on the home page", () => {
    const { getByText } = render(<App />)
    const projectsElement = getByText(/Projects that make a difference/i)
    expect(projectsElement).toBeInTheDocument()
  })

  test("renders 'Checkout my work below' element on the home page", () => {
    const { getByText } = render(<App />)
    const projectsElement = getByText(/Checkout my work below/i)
    expect(projectsElement).toBeInTheDocument()
  })

  test("renders 'Custom site by Don Stevenson' link on the home page", () => {
    const { getByText } = render(<App />)
    const copywriteElement = getByText(/Custom site by Don Stevenson/i)
    expect(copywriteElement).toBeInTheDocument()
  })
})

describe("Testing site functionality", () => {
  test("renders and clicks 'Contact' link and renders the contact page", () => {
    const { getByText } = render(<App />)
    const contactLink = getByText(/Contact/i)
    expect(contactLink).toBeInTheDocument()

    fireEvent.click(contactLink)

    const talkToMeElement = getByText(/Talk to Me/i)
    expect(talkToMeElement).toBeVisible()
  })

  test("renders and clicks 'About' link and renders the About page", () => {
    const { getByText } = render(<App />)
    const AboutLink = getByText(/About/i)
    expect(AboutLink).toBeInTheDocument()

    fireEvent.click(AboutLink)

    const aboutMeElement = getByText(/About Me/i)
    expect(aboutMeElement).toBeVisible()
  })

  test("Expects that name, email and message fields render on the contact page", () => {
    const { getByText } = render(<App />)
    const contactLink = getByText(/Contact/i)
    expect(contactLink).toBeInTheDocument()

    fireEvent.click(contactLink)

    const nameField = getByText(/Name/i)
    expect(nameField).toBeVisible()

    const emailField = getByText("Email")
    expect(emailField).toBeVisible()

    const messageField = getByText(/Message/i)
    expect(messageField).toBeVisible()
  })
})
