import React from "react"
import CardInfo from "../CardInfo"
import styles from "./Card.module.css"

export default function Card({ click, item }) {
  return (
    <div className={styles.cardWrapper} onClick={() => click(item)}>
      <img src={item.imgSrc} alt={item.subTitle} />

      {item.selected && (
        <CardInfo
          title={item.title}
          subTitle={item.subTitle}
          link={item.link}
        />
      )}

      {!item.selected && <div className="placeholder" />}
    </div>
  )
}
