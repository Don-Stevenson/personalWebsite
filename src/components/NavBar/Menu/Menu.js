import React from "react"
import { bool } from "prop-types"
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

Menu.propTypes = {
  open: bool.isRequired
}
export default Menu
