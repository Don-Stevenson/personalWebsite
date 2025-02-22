import React from "react"
import styles from "./Burger.module.css"

const Burger = ({ open, setOpen }) => {
  return (
    <button
      className={`${styles.burger} ${open ? styles.open : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className={styles.burgerLine} />
      <div className={styles.burgerLine} />
      <div className={styles.burgerLine} />
    </button>
  )
}

export default Burger
