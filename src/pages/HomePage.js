import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

// displays the homepage
//**********************
export default function HomePage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />;
      <Carousel />
    </div>
  );
}
