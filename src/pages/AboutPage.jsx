import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import Hero from "../components/Hero/Hero"
import ProfilePic from "..//images/profile pic 2024.webp"
import Resume from "../assets/docs/DS Resume.pdf"
import styles from "./AboutPage.module.css"

export default function AboutPage({ title }) {
  return (
    <div className={styles.pageContainer}>
      <Hero title={title}>{title}</Hero>
      <div className={styles.contentWrapper}>
        <div className={styles.imageSection}>
          <img
            className={styles.profileImage}
            src={ProfilePic}
            alt="profile portrait"
          />
        </div>
        <div className={styles.contentSection}>
          <p className={styles.paragraph}>
            Hi, I'm Don - passionate full-stack software developer, mentor, and
            lifelong learner based in Toronto, Ontario. With expertise spanning
            a wide array of technologies, including React, JavaScript,
            TypeScript, Laravel, PHP, Node.js, GraphQL, and MongoDB, I
            specialize in building scalable, high-performing web applications
            that solve real-world problems.
          </p>
          <p className={styles.paragraph}>
            Over the years, I've worked with notable clients like Ford and
            Manulife, contributing to impactful projects such as fleet repair
            management tools and fintech platforms. My journey has also taken me
            through mentorship roles at Lighthouse Labs, where I helped aspiring
            developers build their skills and launch successful careers in tech.
          </p>
          <p className={styles.paragraph}>
            Beyond coding, I thrive on creativity and craftsmanship. Whether
            it's playing guitar, DIY projects, or roasting coffee, I bring
            curiosity and a multidisciplinary perspective to everything I do. My
            diverse background in music, education, and web development fuels my
            ability to think outside the box, fostering innovative solutions and
            seamless user experiences.
          </p>
          <p className={styles.paragraph}>
            When I'm not writing code, you'll find me practicing guitar, keeping
            aquariums, or engaging in team sports. I'm always eager to connect
            with like-minded individuals and organizations driven to make a
            difference through technology. Let's create something incredible
            together!
          </p>
          <p className={styles.paragraph}>
            Here is my{" "}
            <a href={Resume} target="blank" rel="noopener noreferrrer">
              resume
            </a>
          </p>
          <p className={styles.paragraph}>You can also find me here: </p>
          <div className={styles.socialLinksRow}>
            <a
              className={styles.iconLink}
              href="https://github.com/Don-Stevenson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className={styles.githubIcon} />
            </a>
            <a
              className={styles.iconLink}
              href="https://www.linkedin.com/in/don-stevenson-5b31aa128/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className={styles.linkedinIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
