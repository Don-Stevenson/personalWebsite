import React from "react"
import Link from "next/link"
import styles from "./Menu.module.css"

const Menu = ({ open }) => {
  return (
    <nav
      className={`${styles.menu} ${open ? styles.menuOpen : styles.menuClosed}`}
    >
      <Link className={styles.link} href="/">
        Home
      </Link>
      <Link className={styles.link} href="/about">
        About
      </Link>
      <Link className={styles.link} href="/contact">
        Contact
      </Link>
    </nav>
  )
}

export default Menu
