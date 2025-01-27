import React from "react"
import { StyledMenu, Link } from "./style"

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </StyledMenu>
  )
}

export default Menu
