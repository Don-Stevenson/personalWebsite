import React, { useState } from "react"
import {
  CarouselContainer,
  Card,
  CardImage,
  CardContent,
  FadeIn,
  CardSubtitle,
  ViewLink,
} from "./style"

import FTPPyschStatic from "../../images/FTPsychStatic.png"
import FTPPyschGif from "../../images/FTPsychGif.gif"
import SebastianKnoxStatic from "../../images/SebastianKnoxStatic.png"
import SebastianKnoxGif from "../../images/SebastianKnoxGif.gif"
import schedulerStatic from "../../images/SchedulerStatic.png"
import schedulerGif from "../../images/SchedulerGIF.gif"
import movieDBStatic from "../../images/MovieDBstatic.png"
import movieDBGif from "../../images/batman.gif"
import nagMeStatic from "../../images/NagMe-static.png"
import nagMeGif from "../../images/NagMe.gif"
import weatherAppStatic from "../../images/WeatherAppStatic.jpg"
import weatherAppGif from "../../images/WeatherAppGif.gif"

const carouselItems = [
  {
    id: 0,
    title: "Forward Thinking Psychology",
    subTitle: "I worked as a Front-End Dev for this site",
    imgSrc: FTPPyschStatic,
    gifSrc: FTPPyschGif,
    link: "https://www.ftpsych.ca/",
    selected: false,
  },
  {
    id: 1,
    title: "Sebastian Knox Woodwinds Services",
    subTitle: `I worked Front-End Dev for this \n Saxophone
       Service & E-commerce Site.`,
    imgSrc: SebastianKnoxStatic,
    gifSrc: SebastianKnoxGif,
    link: "https://www.sebastianknox.com/",
    selected: false,
  },
  {
    id: 2,
    title: "Scheduler",
    subTitle: "An app for managing work appointments ",
    imgSrc: schedulerStatic,
    gifSrc: schedulerGif,
    link: "https://github.com/Don-Stevenson/scheduler",
    selected: false,
  },
  {
    id: 3,
    title: "Movie-DB",
    subTitle: "An app that returns movie search results.",
    imgSrc: movieDBStatic,
    gifSrc: movieDBGif,
    link: "https://github.com/Don-Stevenson/moviedb",
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
    items.map(item => ({ ...item, selected: false }))
  )

  const handleCardClick = id => {
    setActiveItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    )
  }

  return { activeItems, handleCardClick }
}

export default function Carousel() {
  const { activeItems, handleCardClick } = useCarousel(carouselItems)

  return (
    <CarouselContainer>
      {activeItems.map(
        ({ id, title, subTitle, imgSrc, gifSrc, link, selected }) => (
          <Card key={id} onClick={() => handleCardClick(id)}>
            <CardImage src={selected ? gifSrc : imgSrc} alt={title} />
            <CardContent>
              {selected && (
                <FadeIn>
                  <CardSubtitle>{subTitle}</CardSubtitle>
                  <ViewLink
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site / Source Code
                  </ViewLink>
                </FadeIn>
              )}
            </CardContent>
          </Card>
        )
      )}
    </CarouselContainer>
  )
}
