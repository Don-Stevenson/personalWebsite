import React from "react"
import Hero from "../components/Hero/Hero"
import Carousel from "../components/Carousel/Carousel"

export default function HomePage({ title, subTitle, text }) {
  return (
    <>
      <Hero title={title} subTitle={subTitle} text={text} />
      <Carousel />
    </>
  )
}
