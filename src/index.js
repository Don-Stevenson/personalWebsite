import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

// Find the root element
const root = document.getElementById("root")

// Create the root
const rootContainer = createRoot(root)

// Render the app
rootContainer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
