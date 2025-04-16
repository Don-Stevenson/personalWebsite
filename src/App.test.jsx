import React from "react"
import { render, screen } from "@testing-library/react"
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

// Helper function to render App directly (no need to wrap with Router)
const renderApp = () => {
  return render(<App />)
}

describe("App Component", () => {
  describe("Homepage Content", () => {
    beforeEach(() => {
      renderApp()
    })

    test("renders main heading", () => {
      const titleElement = screen.getByText(/Keep Learning./i)
      expect(titleElement).toBeInTheDocument()
    })

    test("renders navigation links", () => {
      const homeLink = screen.getAllByText(/Home/i)[0]
      const aboutLink = screen.getAllByText(/About/i)[0]

      expect(homeLink).toBeInTheDocument()
      expect(aboutLink).toBeInTheDocument()
    })

    test("renders project section headings", () => {
      const projectsHeading = screen.getByText(
        /Projects that make a difference/i
      )
      const checkoutText = screen.getByText(/Checkout my work below/i)

      expect(projectsHeading).toBeInTheDocument()
      expect(checkoutText).toBeInTheDocument()
    })

    test("renders footer content", () => {
      const footerText = screen.getByText(/Custom site by Don Stevenson/i)
      expect(footerText).toBeInTheDocument()
    })
  })

  describe("Navigation Functionality", () => {
    beforeEach(() => {
      renderApp()
    })

    test("Contact link has correct href", () => {
      const contactLinks = screen.getAllByText(/Contact/i)

      // Check that at least one contact link exists
      expect(contactLinks.length).toBeGreaterThan(0)

      // Check that the first contact link has the correct href
      expect(contactLinks[0].getAttribute("href")).toBe("/contact")
    })

    test("About link has correct href", () => {
      const aboutLinks = screen.getAllByText(/About/i)

      // Check that at least one about link exists
      expect(aboutLinks.length).toBeGreaterThan(0)

      // Check that the first about link has the correct href
      expect(aboutLinks[0].getAttribute("href")).toBe("/about")
    })

    test("Home link has correct href", () => {
      const homeLinks = screen.getAllByText(/Home/i)

      // Check that at least one home link exists
      expect(homeLinks.length).toBeGreaterThan(0)

      // Check that the first home link has the correct href
      expect(homeLinks[0].getAttribute("href")).toBe("/")
    })
  })
})
