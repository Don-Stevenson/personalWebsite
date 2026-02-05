import { render, screen } from "@testing-library/react"
import AboutPage from "../src/pages/AboutPage"

describe("AboutPage", () => {
    it("should render the about page", () => {
        render(<AboutPage />)
        // get the title by the role of the div and the name of the content
        const openingParagraph = screen.getByText("Hi, I'm Don - passionate full-stack software developer, mentor, and lifelong learner based in Toronto, Ontario. With expertise spanning a wide array of technologies, including React, JavaScript, TypeScript, Laravel, PHP, Node.js, GraphQL, and MongoDB, I specialize in building scalable, high-performing web applications that solve real-world problems.")
        expect(openingParagraph).toBeInTheDocument()
    })

    it("should render the social links", () => {
        render(<AboutPage />)

        // get the github link by the role of the link and the href of the link
        const githubLink = screen.getAllByRole("link", { href: "https://github.com/Don-Stevenson" })[0]
        expect(githubLink).toBeInTheDocument()
        const linkedinLink = screen.getAllByRole("link", { href: "https://www.linkedin.com/in/don-stevenson-5b31aa128/" })[1]
        expect(linkedinLink).toBeInTheDocument()
    })
})