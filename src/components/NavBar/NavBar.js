import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../../hooks"
import styled from "styled-components"
import Burger from "./Burger/Burger"
import Menu from "./Menu/Menu"
// Tute: https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

const Bar = styled.nav`
  display: flex;
  justify-content: end;
  font-size: 18px;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`

const NameAndMenuContainer = styled.div`
  margin-left: 30px;
  margin-bottom: 12px;
  margin-right: 25px;
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
        <NameAndMenuContainer ref={node}>
          <div>Don Stevenson</div>
          <Menu open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
        </NameAndMenuContainer>
      </Bar>
      <HrLine />
    </>
  )
}

export default Navbar
