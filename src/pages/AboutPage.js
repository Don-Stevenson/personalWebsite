import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import ProfilePic from "../components/assets/images/profile-pic.jpg";
import Resume from "../components/assests/doc/Dsresume.pdf"

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
        <br></br>
        <br></br>
        <p>
          Hi, I'm Don Stevenson. I'm a full stack web developer <br></br>
          with experience in Javascript, Ruby on Rails, Node Js, <br></br>
          React, Express JS, PostGres and Mocha / Chai.
        </p>
        <p>
          {" "}
          When I am not building apps and work other coding <br></br>
          projects, I like to do things like: practice guitar, <br></br>
          play sports, roast my own coffee and do different <br></br>
          DIY projects.{" "}
        </p>
        <p src={Resume}> My Resume </p>
        <p href={"https://github.com/Don-Stevenson"}> My github</p>
      </Content>
    </div>
  );
}
