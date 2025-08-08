import "../../styles/globals.css"
import Navbar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"

export const metadata = {
  title: "Don Stevenson -Software Developer",
  description: "Don Stevenson - Software Developer",
  themeColor: "#000000",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
