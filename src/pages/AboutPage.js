import React from "react";
import { Column, Row } from "simple-flexbox";
import { SocialIcon } from "react-social-icons";

import Hero from "../components/Hero";
import ProfilePic from "../components/assets/images/profile-pic.jpg";
import Resume from "../components/assets/docs/DSresume.pdf";
import Content from "../components/Content";

// returns the about page
//**********************/
export default function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title}> title </Hero>
      <Content>
        <Row flexGrow={1}>
          <Column flexGrow={1} horizontal="center">
            <img
              className="d-card-profile"
              src={ProfilePic}
              alt="profile portrait"
            />
          </Column>
          <Content>
            <Column flexGrow={1} horizontal="start">
              <p>
                Hi, I'm Don. I'm a full stack web developer with experience in
                Javascript, Ruby on Rails, Node JS, React, Express JS, SQl,
                PostgreSQL, HTML5, CSS, Jest, and Mocha / Chai.
              </p>
              <p>
                {" "}
                When I am not building apps and work other coding projects, I
                enjoy doing things like: practicing guitar, playing sports,
                roasting my own coffee and making different DIY projects.{" "}
              </p>

              <a href={Resume} target="blank" rel="noopener noreferrrer">
                Here is my resume
              </a>
              <br></br>
              <Row>
                <SocialIcon
                  url="https://github.com/Don-Stevenson"
                  style={{ margin: 5 }}
                  target="blank"
                  rel="noopener noreferrrer"
                />

                <SocialIcon
                  url="https://www.linkedin.com/in/don-stevenson-5b31aa128/"
                  style={{ margin: 5 }}
                  target="blank"
                  rel="noopener noreferrrer"
                />
              </Row>
            </Column>
          </Content>
        </Row>
      </Content>
    </div>
  );
}
