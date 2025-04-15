import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react-swc"
import { resolve } from "path"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.js"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "src/setupTests.js"],
    },
    deps: {
      optimizer: {
        web: {
          include: [/@vitejs\/plugin-react-swc/],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})
