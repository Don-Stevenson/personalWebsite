import React from "react"
import { render, prettyDOM, screen } from "@testing-library/react"
import App from "./App"

test("renders 'Keep Learning.' on the home page", () => {
  const { getByText } = render(<App />)
  const titleElement = getByText(/Keep Learning./i)
  expect(titleElement).toBeInTheDocument()
})
