import React from "react";
import { Column, Row } from "simple-flexbox";
import { SocialIcon } from "react-social-icons";

import Hero from "../components/Hero";
import ProfilePic from "../components/assets/images/profile-pic.jpg";
import Resume from "../components/assets/docs/DS Resume.pdf";
import Content from "../components/Content";

// returns the about page
//**********************/
export default function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title}> title </Hero>
      <Content>
        <Column wrap={true} vertical={"spaced"}>
          <img
            className="d-card-profile"
            src={ProfilePic}
            alt="profile portrait"
          />
          <br></br>
          <p>
            Hi, I'm Don! I'm a full stack web developer with experience in
            Javascript, Ruby on Rails, Clojure, Python, PhP, Node JS, React JS,
            Express JS, SQl, PostgreSQL, MongoDB, HTML5, CSS, Jest, and Mocha /
            Chai.
          </p>

          <p>
            When I am not building apps and working on other coding projects, I
            enjoy doing things like: practicing guitar, playing sports, roasting
            my own coffee and making different DIY projects.
          </p>
          <p>
            Here is my{" "}
            <a href={Resume} target="blank" rel="noopener noreferrrer">
              resume
            </a>
          </p>

          <p> You can also find here:</p>

          <Row>
            <SocialIcon
              url="https://github.com/Don-Stevenson"
              style={{ margin: 6 }}
              target="blank"
              rel="noopener noreferrrer"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/don-stevenson-5b31aa128/"
              style={{ margin: 6 }}
              target="blank"
              rel="noopener noreferrrer"
            />
          </Row>
        </Column>
      </Content>
    </div>
  );
}
