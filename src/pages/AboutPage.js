import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import ProfilePic from "../components/assets/images/profile pic.jpg";

export default function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <img className="d-card-profile" src={ProfilePic} alt="profile" />
        <br></br>
        <br></br>
        <p>
          Hi, I'm Don Stevenson. I'm a full stack web developer with experience
          in Javascript, Ruby on Rails, Node Js, React, Express JS, PostGres and
          Mocha / Chai.
        </p>
        <p>
          {" "}
          When I am not building apps and work other coding projects, I like to
          do things like: practice guitar, play sports, roast my own coffee and
          do different DIY projects.{" "}
        </p>
      </Content>
    </div>
  );
}
