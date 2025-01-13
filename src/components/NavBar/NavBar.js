import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../../hooks"
import Burger from "./Burger/Burger"
import Menu from "./Menu/Menu"
import {
  HrLine,
  LinksWrapper,
  NameAndMenuContainer,
  NavBarWrapper,
  Link,
} from "./style"

const Navbar = () => {
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  const [open, setOpen] = useState(false)
  return (
    <NavBarWrapper>
      <NameAndMenuContainer ref={node}>
        <Menu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
        <LinksWrapper>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </LinksWrapper>
      </NameAndMenuContainer>
      <HrLine />
    </NavBarWrapper>
  )
}

export default Navbar
