import React from "react"
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"

// function displays the homepage
//**********************
export default function HomePage({ title, subTitle, text }) {
  return (
    <div>
      <h1>hello</h1>
      <Hero title={title} subTitle={subTitle} text={text} />
      <Carousel />
    </div>
  )
}
