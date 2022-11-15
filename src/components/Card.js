import React from "react"
import CardInfo from "../components/CardInfo"

export default function Card({ click, item }) {
  return (
    <div className="d-inline-block d-card" onClick={() => click(item)}>
      <img className="d-card-image" src={item.imgSrc} alt={item.subTitle} />

      {item.selected && (
        <CardInfo
          title={item.title}
          subTitle={item.subTitle}
          link={item.link}
        />
      )}

      {!item.selected && <div className="placeholder"></div>}
    </div>
  )
}
