import React from "react";
import CardInfo from "../components/CardInfo";

export default function Card({onClick, item, handleCardHover}) {
  return (
    <div
      className="d-inline-block d-card"
      onClick={(e) => onClick(item)}
      onMouseEnter={() => handleCardHover()}
      onMouseLeave={() => handleCardHover()}
    >
      <img
        className="d-card-image"
        src={item.imgSrc}
        alt={item.subTitle}
      />
      {item.selected && (
        <CardInfo
          title={item.title}
          subTitle={item.subTitle}
          link={item.link}
        />
      )}
    </div>
  );
}
