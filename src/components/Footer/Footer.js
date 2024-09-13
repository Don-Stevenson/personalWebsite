import React from "react"
import { Container, CopyrightContainer, HrLine } from "./style"

const year = new Date().toLocaleDateString("en-US", { year: "numeric" })

export default function Footer() {
  return (
    <>
      <HrLine />
      <Container>
        <CopyrightContainer>
          Custom site by Don&nbsp;Stevenson ©&nbsp;{year}
        </CopyrightContainer>
      </Container>
    </>
  )
}
