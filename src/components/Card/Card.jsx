import React from "react"
import CardInfo from "../CardInfo"
import { CardWrapper } from "./style"

export default function Card({ click, item }) {
  return (
    <CardWrapper onClick={() => click(item)}>
      <img src={item.imgSrc} alt={item.subTitle} />

      {item.selected && (
        <CardInfo
          title={item.title}
          subTitle={item.subTitle}
          link={item.link}
        />
      )}

      {!item.selected && <div className="placeholder"></div>}
    </CardWrapper>
  )
}
