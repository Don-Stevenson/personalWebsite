import React from "react";
import { Column, Row } from "simple-flexbox";
import Content from "../components/Content";

import Hero from "../components/Hero";
import ProfilePic from "../components/assets/images/profile-pic.jpg";
import Resume from "../components/assets/docs/DSresume.pdf";
import Col from "react-bootstrap/Col";

export default function AboutPage(props) {
  return (
    //       <Column flexGrow={1}>
    //     <Row horizontal='center'>
    //         <h1>HEADER</h1>
    //     </Row>
    //     <Row vertical='center'>
    //         <Column flexGrow={1} horizontal='center'>
    //             <h3> Column 1 </h3>
    //             <span> column 1 content </span>
    //         </Column>
    //         <Column flexGrow={1} horizontal='center'>
    //             <h3> Column 2 </h3>
    //             <span> column 2 content </span>
    //         </Column>
    //     </Row>
    // </Column>

    <Column flexGrow={1}>
      <Hero title={props.title} />
       <span>
          <img
            className="d-card-profile"
            src={ProfilePic}
            alt="profile portrait"
          />
        </span>
           </Column>
          <Column flexGrow={1} horizontal="center">
        <span>
          <p>
            Hi, I'm Don Stevenson. I'm a full stack web developer with
            experience in Javascript, Ruby on Rails, Node Js, React, Express JS,
            PostGres and Mocha / Chai.
          </p>
          <p>
            {" "}
            When I am not building apps and work other coding projects, I enjoy
            doing things like: practicing guitar, playing sports, roasting my
            own coffee and making different DIY projects.{" "}
          </p>
        </span>
        <a href={Resume} target="blank">
          My Resume
        </a>
        <a target="blank" href="https://github.com/Don-Stevenson">
          {" "}
          My Github
        </a>
      </Column>
    
  );
}
