import React from "react";
import CardInfo from "../components/CardInfo";

export default function Card(props) {
  return (
    <div>
      <img className="" src={props.item.imgSrc} alt={props.item.subTitle} />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}
