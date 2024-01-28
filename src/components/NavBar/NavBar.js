import React from "react"
import styled from "styled-components"
import Burger from "./Burger/Burger"
import Menu from "./Menu/Menu"
// Tute: https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

const Bar = styled.nav`
  font-size: 18px;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`
const NameBox = styled.div`
  margin-left: 30px;
`

const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
`

export const HrLine = styled.hr`
  border-top: 1px solid lightgrey;
`

const toggleNavBar = () => {
  this.setState((prevState, props) => {
    switch (prevState.displayNav) {
      case "none":
        return { displayNav: "flex" }
      case "flex":
      default:
        return { displayNav: "none" }
    }
  })
}
const Navbar = () => {
  return (
    <>
      <Bar>
        <NavBarToggle onClick={() => toggleNavBar()}>
          <Burger />
        </NavBarToggle>
        <NameBox>Don Stevenson</NameBox>
        <Menu />
      </Bar>
      <HrLine />
    </>
  )
}

export default Navbar
