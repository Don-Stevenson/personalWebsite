import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useRef } from "react"
import { useOnClickOutside } from "../src/hooks"

beforeEach(() => {
    jest.clearAllMocks()
})

afterEach(() => {
    jest.clearAllMocks()
})

describe("useOnClickOutside", () => {
    it("should call handler when clicking outside the ref element", async () => {
        const user = userEvent.setup()
        const handler = jest.fn()

        const TestComponent = () => {
            const ref = useRef(null)
            useOnClickOutside(ref, handler)
            return (
                <div>
                    <div ref={ref} data-testid="inside">Inside Element</div>
                    <div data-testid="outside">Outside Element</div>
                </div>
            )
        }

        render(<TestComponent />)
        await user.click(screen.getByTestId("outside"))

        expect(handler).toHaveBeenCalledTimes(1)
        expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent))
    })

    it("should NOT call handler when clicking inside the ref element", async () => {
        const user = userEvent.setup()
        const handler = jest.fn()

        const TestComponent = () => {
            const ref = useRef(null)
            useOnClickOutside(ref, handler)
            return <div ref={ref} data-testid="inside">Inside Element</div>
        }

        render(<TestComponent />)
        await user.click(screen.getByTestId("inside"))

        expect(handler).not.toHaveBeenCalled()
    })

    it("should NOT call handler when clicking on child elements inside ref", async () => {
        const user = userEvent.setup()
        const handler = jest.fn()

        const TestComponent = () => {
            const ref = useRef(null)
            useOnClickOutside(ref, handler)
            return (
                <div ref={ref} data-testid="parent">
                    <div data-testid="child">Child Element</div>
                    <button data-testid="button">Button</button>
                </div>
            )
        }

        render(<TestComponent />)
        await user.click(screen.getByTestId("child"))
        await user.click(screen.getByTestId("button"))

        expect(handler).not.toHaveBeenCalled()
    })

    it("should handle multiple clicks outside", async () => {
        const user = userEvent.setup()
        const handler = jest.fn()

        const TestComponent = () => {
            const ref = useRef(null)
            useOnClickOutside(ref, handler)
            return (
                <div>
                    <div ref={ref} data-testid="inside">Inside</div>
                    <button data-testid="outside1">Button 1</button>
                    <button data-testid="outside2">Button 2</button>
                </div>
            )
        }

        render(<TestComponent />)
        await user.click(screen.getByTestId("outside1"))
        await user.click(screen.getByTestId("outside2"))
        await user.click(screen.getByTestId("outside1"))

        expect(handler).toHaveBeenCalledTimes(3)
    })

    it("should call handler when clicking document body", async () => {
        const user = userEvent.setup()
        const handler = jest.fn()

        const TestComponent = () => {
            const ref = useRef(null)
            useOnClickOutside(ref, handler)
            return (
                <div style={{ padding: "50px" }}>
                    <div ref={ref} data-testid="inside">Inside</div>
                </div>
            )
        }

        const { container } = render(<TestComponent />)
        // Click on the container (outside the ref element)
        await user.click(container.firstChild)

        expect(handler).toHaveBeenCalledTimes(1)
    })

    it("should cleanup event listener on unmount", async () => {
        const user = userEvent.setup()
        const handler = jest.fn()
        const addEventListenerSpy = jest.spyOn(document, "addEventListener")
        const removeEventListenerSpy = jest.spyOn(document, "removeEventListener")

        const TestComponent = () => {
            const ref = useRef(null)
            useOnClickOutside(ref, handler)
            return (
                <div>
                    <div ref={ref} data-testid="inside">Inside</div>
                    <div data-testid="outside">Outside</div>
                </div>
            )
        }

        const { unmount } = render(<TestComponent />)

        expect(addEventListenerSpy).toHaveBeenCalledWith("mousedown", expect.any(Function))

        unmount()

        expect(removeEventListenerSpy).toHaveBeenCalledWith("mousedown", expect.any(Function))

        addEventListenerSpy.mockRestore()
        removeEventListenerSpy.mockRestore()
    })

    it("should handle rapid successive clicks", async () => {
        const user = userEvent.setup()
        const handler = jest.fn()

        const TestComponent = () => {
            const ref = useRef(null)
            useOnClickOutside(ref, handler)
            return (
                <div>
                    <div ref={ref} data-testid="inside">Inside</div>
                    <div data-testid="outside">Outside</div>
                </div>
            )
        }

        render(<TestComponent />)
        const outsideElement = screen.getByTestId("outside")

        // Simulate rapid clicks
        await user.tripleClick(outsideElement)

        expect(handler).toHaveBeenCalledTimes(3)
    })

    it("should work with dynamically changing handler", async () => {
        const user = userEvent.setup()
        const handler1 = jest.fn()
        const handler2 = jest.fn()

        const TestComponent = ({ onClickOutside }) => {
            const ref = useRef(null)
            useOnClickOutside(ref, onClickOutside)
            return (
                <div>
                    <div ref={ref} data-testid="inside">Inside</div>
                    <div data-testid="outside">Outside</div>
                </div>
            )
        }

        const { rerender } = render(<TestComponent onClickOutside={handler1} />)
        await user.click(screen.getByTestId("outside"))

        expect(handler1).toHaveBeenCalledTimes(1)
        expect(handler2).not.toHaveBeenCalled()

        // Change the handler
        rerender(<TestComponent onClickOutside={handler2} />)
        await user.click(screen.getByTestId("outside"))

        expect(handler1).toHaveBeenCalledTimes(1)
        expect(handler2).toHaveBeenCalledTimes(1)
    })

    it("should handle case when ref.current is null initially", async () => {
        const user = userEvent.setup()
        const handler = jest.fn()

        const TestComponent = () => {
            const ref = useRef(null)
            useOnClickOutside(ref, handler)
            // Ref is not attached to anything
            return <div data-testid="outside">Outside</div>
        }

        render(<TestComponent />)
        await user.click(screen.getByTestId("outside"))

        // Handler should NOT be called when ref.current is null
        // because there's no element to determine "outside" from
        expect(handler).not.toHaveBeenCalled()
    })
})