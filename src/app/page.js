import HomePage from "../pages/HomePage"

export default function Home() {
  const home = {
    title: "Engineering Solutions.",
    subTitle: "Continuously Improving.",
    text: "Checkout my work below",
  }

  return (
    <HomePage title={home.title} subTitle={home.subTitle} text={home.text} />
  )
}
