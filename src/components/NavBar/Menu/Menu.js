import React from "react"
import { bool } from "prop-types"
import { StyledMenu, link } from "./style"
import { BrowserRouter as Link } from "react-router-dom"

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired
}
export default Menu
