import React from "react"
import styled from "styled-components"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import Hero from "../components/Hero/Hero"
import ProfilePic from "../components/assets/images/profile pic 2024.webp"
import Resume from "../components/assets/docs/DS Resume.pdf"
import { devices } from "../utils/constants"

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-bottom: 8rem;

  @media ${devices.md} {
    margin-left: 3rem;
    flex-direction: row;
  }
`

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 93%;
`

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  object-fit: contain;
  align-self: left;
`

const ContentSection = styled.div`
  margin-right: 1rem;
`

const Paragraph = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1rem;
  max-width: 30rem;

  @media ${devices.md} {
    margin-top: 0;
    margin-left: 3rem;
  }
`

const SocialLinksRow = styled.div`
  display: flex;
  align-items: center;
  @media ${devices.md} {
    margin-left: 3rem;
  }
`

const IconLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`

const StyledGithubIcon = styled(AiFillGithub)`
  color: #333;
  font-size: 35px;
  margin: 6px;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`

const StyledLinkedinIcon = styled(AiFillLinkedin)`
  color: #0077b5;
  font-size: 35px;
  margin: 6px;
  transition: color 0.3s ease;

  &:hover {
    color: #0099d4;
  }
`

export default function AboutPage({ title }) {
  return (
    <PageContainer>
      <Hero title={title}>{title}</Hero>
      <ContentWrapper>
        <ImageSection>
          <ProfileImage src={ProfilePic} alt="profile portrait" />
        </ImageSection>
        <ContentSection>
          <Paragraph>
            Hi, I’m Don - passionate full-stack software developer, mentor, and
            lifelong learner based in Toronto, Ontario. With expertise spanning
            a wide array of technologies, including React, JavaScript,
            TypeScript, Laravel, PHP, Node.js, GraphQL, and MongoDB, I
            specialize in building scalable, high-performing web applications
            that solve real-world problems.
          </Paragraph>
          <Paragraph>
            Over the years, I’ve worked with notable clients like Ford and
            Manulife, contributing to impactful projects such as fleet repair
            management tools and fintech platforms. My journey has also taken me
            through mentorship roles at Lighthouse Labs, where I helped aspiring
            developers build their skills and launch successful careers in tech.
          </Paragraph>
          <Paragraph>
            Beyond coding, I thrive on creativity and craftsmanship. Whether
            it’s playing guitar, DIY projects, or roasting coffee, I bring
            curiosity and a multidisciplinary perspective to everything I do. My
            diverse background in music, education, and web development fuels my
            ability to think outside the box, fostering innovative solutions and
            seamless user experiences.
          </Paragraph>
          <Paragraph>
            When I’m not writing code, you’ll find me practicing guitar, keeping
            aquariums, or engaging in team sports. I’m always eager to connect
            with like-minded individuals and organizations driven to make a
            difference through technology. Let’s create something incredible
            together!
          </Paragraph>
          <Paragraph>
            Here is my{" "}
            <a href={Resume} target="blank" rel="noopener noreferrrer">
              resume
            </a>
          </Paragraph>
          <Paragraph>You can also find me here: </Paragraph>
          <SocialLinksRow>
            <IconLink
              href="https://github.com/Don-Stevenson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledGithubIcon />
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/don-stevenson-5b31aa128/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledLinkedinIcon />
            </IconLink>
          </SocialLinksRow>
        </ContentSection>
      </ContentWrapper>
    </PageContainer>
  )
}
