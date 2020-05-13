import React from "react";

export default function Card(props) {
  return (
    <div>
      <img className="" src={props.item.imgSrc} alt={props.item.subTitle} />
    </div>
  );
}
