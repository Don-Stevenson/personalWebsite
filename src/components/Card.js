import React from "react";
import CardInfo from "../components/CardInfo";

export default function Card(props) {
  return (
    <div
      className="d-inline-block d-card"
      onClick={() => props.click(props.item)}
    >
      <img
        className="d-card-image"
        src={props.item.imgSrc}
        alt={props.item.subTitle}
      />
     

      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}

      {!props.item.selected && (<div className="placeholder"></div>)}
    </div>
  );
}
