// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import "@testing-library/jest-dom"
import { expect, afterEach } from "vitest"
import { cleanup } from "@testing-library/react"

// Automatically cleanup after each test
afterEach(() => {
  cleanup()
})

// Extend expect with custom matchers
expect.extend({
  toBeInTheDocument(received) {
    const pass = received !== null
    if (pass) {
      return {
        message: () => `expected ${received} not to be in the document`,
        pass: true,
      }
    } else {
      return {
        message: () => `expected ${received} to be in the document`,
        pass: false,
      }
    }
  },
})
