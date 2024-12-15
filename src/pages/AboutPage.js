import React from "react"
import styled from "styled-components"
import { SocialIcon } from "react-social-icons"
import Hero from "../components/Hero/Hero"
import ProfilePic from "../components/assets/images/profile pic 2024.webp"
import Resume from "../components/assets/docs/DS Resume.pdf"
import { devices } from "../utils/constants"

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const TextAndIconWrapper = styled.div`
  // margin-left: 3rem;
  // padding: 0 3rem;
`
const Row = styled.div`
  @media ${devices.md} {
    padding: 3 0rem;
    margin-left: 3rem;
  }
`

const Text = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1rem;
  max-width: 30rem;
  @media ${devices.md} {
    margin-left: 3rem;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`

const StyledProfileImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  object-fit: contain;
  align-self: left;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-bottom: 8rem;
  @media ${devices.md} {
    margin-left: 3rem;
    flex-direction: row;
  }
`

export default function AboutPage({ title }) {
  return (
    <PageContainer>
      <Hero title={title}> title </Hero>
      <Wrapper>
        <ImageWrapper>
          <StyledProfileImage src={ProfilePic} alt="profile portrait" />
        </ImageWrapper>
        <TextAndIconWrapper>
          <Text>
            Hi, I'm Don! I'm a full stack software developer with experience in
            Javascript, Clojure, WordPress, Ruby on Rails, Python, PhP, Node JS,
            React JS, Gatsby JS, Express JS, SQl, GraphQL, PostgreSQL, MongoDB,
            HTML5, CSS, Jest, and Mocha / Chai.
          </Text>

          <Text>
            When I am not building apps and working on other coding projects, I
            enjoy doing things like: practicing guitar, playing team sports,
            keeping aquariums, roasting my own coffee, knife sharpening and
            working on different DIY projects.
          </Text>
          <Text>
            Here is my{" "}
            <a href={Resume} target="blank" rel="noopener noreferrrer">
              resume
            </a>
          </Text>

          <Text> You can also find me here: {"  "} </Text>
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
        </TextAndIconWrapper>
      </Wrapper>
    </PageContainer>
  )
}
