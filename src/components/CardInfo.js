import React from "react";
import { useSpring, animated } from "react-spring";

// function that returns the cards using the react-spring library
// **************************************************************

export default function CardInfo({ title, subTitle, link }) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="d-card-info" style={style}>
      <p className="d-card-title">{title}</p>
      <p className="d-card-subtitle">{subTitle} </p>
      <a href={link} target="blank" rel="noopener noreferrrer">
        {" "}
        View Code / Site{" "}
      </a>
    </animated.div>
  );
}
