import React from "react"
import { Container, CopyrightContainer, HrLine } from "./style"
// storing the current year in a variable using the new Date method
//*********************************************
const year = new Date().toLocaleDateString("en-US", { year: "numeric" })

// returns the footer
// ******************
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
