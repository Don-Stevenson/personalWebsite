import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../../hooks"
import styled from "styled-components"
import Burger from "./Burger/Burger"
import Menu from "./Menu/Menu"

const NameAndMenuContainer = styled.div`
  display: flex;
  margin: 2rem;
  justify-content: space-between;
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
      <NameAndMenuContainer ref={node}>
        <div>Don Stevenson</div>
        <Menu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
      </NameAndMenuContainer>
      <HrLine />
    </>
  )
}

export default Navbar
