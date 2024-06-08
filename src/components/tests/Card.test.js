import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import Card from "../Card"

describe("Card component", () => {
  const mockItem = {
    id: 1,
    title: "Test Title",
    description: "Test Description",
    link: "test-link",
    selected: true,
  }
  it.only("renders without crashing", () => {
    render(
      <Card
        title={mockItem.title}
        subTitle={mockItem.subTitle}
        link={mockItem.link}
        selected={mockItem.selected}
      />
    )

    // const { container } = render(<Card item={mockItem} />)
    // expect(container).toBeDefined()
  })

  it("displays the correct title", () => {
    const { getByText } = render(<Card item={mockItem} />)
    expect(getByText("Test Title")).toBeInTheDocument()
  })

  it("displays the correct description", () => {
    const { getByText } = render(<Card item={mockItem} />)
    expect(getByText("Test Description")).toBeInTheDocument()
  })

  it("calls the click function when clicked", () => {
    const mockClick = jest.fn()
    const { getByTestId } = render(<Card item={mockItem} click={mockClick} />)
    fireEvent.click(getByTestId("card"))
    expect(mockClick).toHaveBeenCalled()
  })
})
