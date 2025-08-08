import HomePage from "../pages/HomePage"

export default function Home() {
  const home = {
    title: "Keep Learning.",
    subTitle: "Projects that make a difference",
    text: "Checkout my work below",
  }

  return (
    <HomePage title={home.title} subTitle={home.subTitle} text={home.text} />
  )
}
