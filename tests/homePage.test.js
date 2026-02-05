import { render, screen } from "@testing-library/react"
import HomePage from "../src/pages/HomePage"

describe("HomePage", () => {
    it.only("should render the home page", () => {
        render(<HomePage />)

        const title = screen.getByTestId("title")
        const subTitle = screen.getByTestId("subtitle1")
        const text = screen.getByTestId("subtitle2")
        expect(title).toBeInTheDocument()
        expect(subTitle).toBeInTheDocument()
        expect(text).toBeInTheDocument()
    })

    it("should render the carousel", () => {
        render(<HomePage />)
        const carousel = screen.getByRole("carousel")
        expect(carousel).toBeInTheDocument()
    })
})