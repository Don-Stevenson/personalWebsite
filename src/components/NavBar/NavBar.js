import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../../hooks"
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
const Navbar = () => {
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  const [open, setOpen] = useState(false)
  return (
    <>
      <Bar>
        <Burger open={open} setOpen={setOpen} />
        <div ref={node}>
          <NameBox>Don Stevenson</NameBox>
          <Menu open={open} setOpen={setOpen} />
        </div>
      </Bar>
      <HrLine />
    </>
  )
}

export default Navbar
