import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import ProfilePic from "../components/assets/images/profile-pic.jpg";
import Resume from "../components/assets/docs/DSresume.pdf";

export default function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <img
          className="d-card-profile"
          src={ProfilePic}
          alt="profile portrait"
        />

        <p>
          Hi, I'm Don Stevenson. I'm a full stack web developer with experience
          in Javascript, Ruby on Rails, Node Js, React, Express JS, PostGres and
          Mocha / Chai.
        </p>
        <p>
          {" "}
          When I am not building apps and work other coding projects, I enjoy
          doing things like: practicing guitar, <br></br>
          playing sports, roasting my own coffee and making different DIY
          projects.{" "}
        </p>
        <a href={Resume} target="blank">
          My Resume
        </a>

        <a target="blank" href="https://github.com/Don-Stevenson">
          {" "}
          My Github
        </a>
      </Content>
    </div>
  );
}
