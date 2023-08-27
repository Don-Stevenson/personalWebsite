import React from "react"
import styled from "styled-components"
import { SocialIcon } from "react-social-icons"

import Hero from "../components/Hero/Hero"
import ProfilePic from "../components/assets/images/profile-pic.jpg"
import Resume from "../components/assets/docs/DS Resume.pdf"
import Content from "../components/Content"

const Column = styled.div`
  padding: 3rem;
`
const Row = styled.div`
  padding: 3rem;
`

// returns the about page
//**********************/
export default function AboutPage({ title }) {
  return (
    <div>
      <Hero title={title}> title </Hero>
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
            Javascript, Clojure, WordPress, Ruby on Rails, Python, PhP, Node JS,
            React JS, Gatsby JS, Express JS, SQl, GraphQL, PostgreSQL, MongoDB,
            HTML5, CSS, Jest, and Mocha / Chai.
          </p>

          <p>
            When I am not building apps and working on other coding projects, I
            enjoy doing things like: practicing guitar, playing team sports,
            keeping aquariums, roasting my own coffee, knife sharpening and
            working on different DIY projects.
          </p>
          <p>
            Here is my{" "}
            <a href={Resume} target="blank" rel="noopener noreferrrer">
              resume
            </a>
          </p>

          <p> You can also find me here: {"  "} </p>
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
  )
}
