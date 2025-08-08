import React from "react"
import { render, screen } from "@testing-library/react"
import HomePage from "./pages/HomePage"

// Helper function to render HomePage
const renderHomePage = () => {
  const homeProps = {
    title: "Keep Learning.",
    subTitle: "Projects that make a difference", 
    text: "Checkout my work below"
  }
  return render(<HomePage {...homeProps} />)
}

describe("HomePage Component", () => {
  describe("Homepage Content", () => {
    beforeEach(() => {
      renderHomePage()
    })

    test("renders main heading", () => {
      const titleElement = screen.getByText(/Keep Learning./i)
      expect(titleElement).toBeInTheDocument()
    })

    test("renders project section headings", () => {
      const projectsHeading = screen.getByText(
        /Projects that make a difference/i
      )
      const checkoutText = screen.getByText(/Checkout my work below/i)

      expect(projectsHeading).toBeInTheDocument()
      expect(checkoutText).toBeInTheDocument()
    })

    test("renders carousel component", () => {
      // Test that carousel container exists
      const carouselContainer = document.querySelector('.carouselContainer')
      expect(carouselContainer).toBeInTheDocument()
    })

    test("renders project cards", () => {
      // Test that project cards are rendered
      const cards = document.querySelectorAll('.card')
      expect(cards.length).toBeGreaterThan(0)
    })
  })


})
