import React from "react"
import styles from "./Hero.module.css"

export default function Hero({ title, subTitle, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle1}>{subTitle}</div>
      <div className={styles.subtitle2}>{text}</div>
    </div>
  )
}
