"use client"
import React, { useState, useRef } from "react"
import Link from "next/link"
import { useOnClickOutside } from "../../hooks"
import Burger from "./Burger/Burger"
import Menu from "./Menu/Menu"
import styles from "./NavBar.module.css"

const Navbar = () => {
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.navBarWrapper}>
      <div className={styles.nameAndMenuContainer} ref={node}>
        <Menu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
        <div className={styles.linksWrapper}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/about">
            About
          </Link>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
        </div>
      </div>
      <hr className={styles.hrLine} />
    </div>
  )
}

export default Navbar
