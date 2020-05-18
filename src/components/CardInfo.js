import React from "react";
import { useSpring, animated } from "react-spring";

export default function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="d-card-info" style={style}>
      <p className="d-card-title">{props.title}</p>
      <p className="d-card-subtitle">{props.subTitle} </p>
      <a href={props.link} target="blank" rel="noopener noreferrrer">
        {" "}
        View Code{" "}
      </a>
    </animated.div>
  );
}
