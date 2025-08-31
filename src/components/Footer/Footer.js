export default function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        textAlign: "center",
        color: "#666",
        fontSize: "0.9rem",
      }}
    >
      <p>© {new Date().getFullYear()} Don Stevenson.</p>
    </footer>
  )
}
