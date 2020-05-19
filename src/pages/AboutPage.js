import React from "react";
import { Column, Row } from "simple-flexbox";

import Hero from "../components/Hero";
import ProfilePic from "../components/assets/images/profile-pic.jpg";
import Resume from "../components/assets/docs/DSresume.pdf";
import Content from "../components/Content";

export default function AboutPage(props) {
  return (
    <Content>
      <Hero title={props.title} />
      <Row flexGrow={1}>
        <Column flexGrow={1} horizontal="center">
          <img
            className="d-card-profile"
            src={ProfilePic}
            alt="profile portrait"
          />
        </Column>
        <Column flexGrow={1} horizontal="left">
          <p>
            Hi, I'm Don Stevenson. I'm a full stack web developer with
            experience in Javascript, Ruby on Rails, Node JS, React, Express JS,
            SQl, PostgreSQL and Mocha / Chai.
          </p>
          <p>
            {" "}
            When I am not building apps and work other coding projects, I enjoy
            doing things like: practicing guitar, playing sports, roasting my
            own coffee and making different DIY projects.{" "}
          </p>

          <a href={Resume} target="blank">
            Here is my resume
          </a>
          <a target="blank" href="https://github.com/Don-Stevenson">
            {" "}
            Here is my Github
          </a>
        </Column>
      </Row>
    </Content>
  );
}
