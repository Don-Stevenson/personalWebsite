import React from "react"
import styles from "./Menu.module.css"

const Menu = ({ open }) => {
  return (
    <nav
      className={`${styles.menu} ${open ? styles.menuOpen : styles.menuClosed}`}
    >
      <a className={styles.link} href="/">
        Home
      </a>
      <a className={styles.link} href="/about">
        About
      </a>
      <a className={styles.link} href="/contact">
        Contact
      </a>
    </nav>
  )
}

export default Menu
