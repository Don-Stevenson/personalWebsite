import React from "react"
import styled from "styled-components"

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem;
  padding: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default function Navbar() {
  return (
    <NavBarContainer>
      <div>Don Stevenson - Web Developer</div>
      <LinkWrapper>
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </LinkWrapper>
    </NavBarContainer>
  )
}
