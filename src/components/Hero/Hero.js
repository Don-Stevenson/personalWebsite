import React from "react"
import { Container, Title, SubTitle1, SubTitle2 } from "./style"

// function that returns the homepage title, subtitle and text
// ***********************************************************

export default function Hero({ title, subTitle, text }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {subTitle && <SubTitle1>{subTitle}</SubTitle1>}
      {text && <SubTitle2>{text}</SubTitle2>}
    </Container>
  )
}
