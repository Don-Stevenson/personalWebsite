"use client"
import React, { useState } from "react"
import styles from "./Carousel.module.css"

const FTPPyschStatic = "/FTPsychStatic.webp"
const FTPPyschGif = "/FTPsychGif.gif"
const SebastianKnoxStatic = "/SebastianKnoxStatic.webp"
const SebastianKnoxGif = "/SebastianKnoxGif.gif"
const schedulerStatic = "/SchedulerStatic.webp"
const schedulerGif = "/SchedulerGIF.gif"
const TeamCreatorStatic = "/TeamCreatorStatic.webp"
const TeamCreatorGif = "/TeamCreatorGif.gif"
const nagMeStatic = "/NagMe-static.webp"
const nagMeGif = "/NagMe.gif"
const weatherAppStatic = "/WeatherAppStatic.webp"
const weatherAppGif = "/WeatherAppGif.gif"

const carouselItems = [
  {
    id: 0,
    title: "Soccer Team Creator",
    subTitle: "An app that creates balanced teams for soccer",
    imgSrc: TeamCreatorStatic,
    gifSrc: TeamCreatorGif,
    link: "https://create-teams.vercel.app/login",
    selected: false,
  },
  {
    id: 1,
    title: "Forward Thinking Psychology",
    subTitle: "I worked as a Front-End Dev for this site",
    imgSrc: FTPPyschStatic,
    gifSrc: FTPPyschGif,
    link: "https://www.ftpsych.ca/",
    selected: false,
  },
  {
    id: 2,
    title: "Sebastian Knox Woodwinds Services",
    subTitle: `I worked Front-End Dev for this \n Saxophone
       Service & E-commerce Site.`,
    imgSrc: SebastianKnoxStatic,
    gifSrc: SebastianKnoxGif,
    link: "https://www.sebastianknox.com/",
    selected: false,
  },
  {
    id: 3,
    title: "Scheduler",
    subTitle: "An app for managing work appointments ",
    imgSrc: schedulerStatic,
    gifSrc: schedulerGif,
    link: "https://github.com/Don-Stevenson/scheduler",
    selected: false,
  },

  {
    id: 4,
    title: "Nag-me",
    subTitle: "A nudge-theory goal attainment app",
    imgSrc: nagMeStatic,
    gifSrc: nagMeGif,
    link: "https://github.com/Don-Stevenson/nag-me",
    selected: false,
  },
  {
    id: 5,
    title: "The Weather App",
    subTitle: "An app that returns weather results.",
    imgSrc: weatherAppStatic,
    gifSrc: weatherAppGif,
    link: "https://github.com/Don-Stevenson/weather-app",
    selected: false,
  },
]

function useCarousel(items) {
  const [activeItems, setActiveItems] = useState(
    items.map(item => ({ ...item, selected: false })),
  )

  const handleCardClick = id => {
    setActiveItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, selected: true }
          : { ...item, selected: false },
      ),
    )
  }

  return { activeItems, handleCardClick }
}

export default function Carousel() {
  const { activeItems, handleCardClick } = useCarousel(carouselItems)

  return (
    <div className={styles.carouselContainer}>
      {activeItems.map(
        ({ id, title, subTitle, imgSrc, gifSrc, link, selected }) => (
          <div
            key={id}
            className={styles.card}
            onClick={() => handleCardClick(id)}
          >
            <img
              className={styles.cardImage}
              src={selected ? gifSrc : imgSrc}
              alt={title}
            />
            <div className={styles.cardContent}>
              {selected && (
                <div className={styles.fadeIn}>
                  <p className={styles.cardSubtitle}>{subTitle}</p>
                  <a
                    className={styles.viewLink}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site / Source Code
                  </a>
                </div>
              )}
            </div>
          </div>
        ),
      )}
    </div>
  )
}
