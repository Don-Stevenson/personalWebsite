import React from "react"
import { render, fireEvent, cleanup } from "@testing-library/react"
import { expect } from "vitest"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

// Mock the router components
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual,
    // Replace BrowserRouter with MemoryRouter for testing
    BrowserRouter: ({ children }) => (
      <actual.MemoryRouter initialEntries={["/"]}>
        {children}
      </actual.MemoryRouter>
    ),
  }
})

afterEach(() => {
  cleanup()
})

// Helper function to render App directly (no need to wrap with Router)
const renderApp = () => {
  return render(<App />)
}

describe("testing the homepage", () => {
  test("renders 'Keep Learning.' on the home page", () => {
    const { getByText } = renderApp()
    const titleElement = getByText(/Keep Learning./i)
    expect(titleElement).to.exist
  })

  test("renders 'Home' link on the home page", () => {
    const { getByText, getAllByText } = renderApp()
    const homeLink = getAllByText(/Home/i)[0]
    expect(homeLink).to.exist
  })

  test("renders 'About' link on the home page", () => {
    const { getByText, getAllByText } = renderApp()
    const aboutLink = getAllByText(/About/i)[0]
    expect(aboutLink).to.exist
  })

  test("renders 'Projects that make a difference' element on the home page", () => {
    const { getByText } = renderApp()
    const projectsElement = getByText(/Projects that make a difference/i)
    expect(projectsElement).to.exist
  })

  test("renders 'Checkout my work below' element on the home page", () => {
    const { getByText } = renderApp()
    const projectsElement = getByText(/Checkout my work below/i)
    expect(projectsElement).to.exist
  })

  test("renders 'Custom site by Don Stevenson' link on the home page", () => {
    const { getByText } = renderApp()
    const copywriteElement = getByText(/Custom site by Don Stevenson/i)
    expect(copywriteElement).to.exist
  })
})

// For the navigation tests, we'll just test that the links exist and have the correct href
describe("Testing site functionality", () => {
  test("Contact link has correct href", () => {
    const { getAllByText } = renderApp()
    const contactLinks = getAllByText(/Contact/i)

    // Check that at least one contact link exists
    expect(contactLinks.length).to.be.greaterThan(0)

    // Check that the first contact link has the correct href
    expect(contactLinks[0].getAttribute("href")).to.equal("/contact")
  })

  test("About link has correct href", () => {
    const { getAllByText } = renderApp()
    const aboutLinks = getAllByText(/About/i)

    // Check that at least one about link exists
    expect(aboutLinks.length).to.be.greaterThan(0)

    // Check that the first about link has the correct href
    expect(aboutLinks[0].getAttribute("href")).to.equal("/about")
  })

  test("Home link has correct href", () => {
    const { getAllByText } = renderApp()
    const homeLinks = getAllByText(/Home/i)

    // Check that at least one home link exists
    expect(homeLinks.length).to.be.greaterThan(0)

    // Check that the first home link has the correct href
    expect(homeLinks[0].getAttribute("href")).to.equal("/")
  })
})
