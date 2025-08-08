import { useEffect } from "react"

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window === "undefined" || typeof document === "undefined") {
      return
    }

    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener("mousedown", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}
