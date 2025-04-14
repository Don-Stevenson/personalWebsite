import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["linked-dep"],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/linked-dep/, /node_modules/],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    css: true,
    reporters: ["verbose"],
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*"],
      exclude: [],
    },
  },
})
