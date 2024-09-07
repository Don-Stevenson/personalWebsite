import React from "react"
import { Container, Title, SubTitle1, SubTitle2 } from "./style"

// function that returns the homepage title, subtitle and text
// ***********************************************************

export default function Hero({ title, subTitle, text }) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle1>{subTitle}</SubTitle1>
      <SubTitle2>{text}</SubTitle2>
    </Container>
  )
}
