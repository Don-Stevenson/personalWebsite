import React from "react"
import styles from "./Hero.module.css"

export default function Hero({ title, subTitle, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.title} data-testid="title">
        {title}
      </div>
      <div className={styles.subtitle1} data-testid="subtitle1">
        {subTitle}
      </div>
      <div className={styles.subtitle2} data-testid="subtitle2">
        {text}
      </div>
    </div>
  )
}
