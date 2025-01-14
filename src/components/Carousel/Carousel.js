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

export default function Carousel() {
  const [items, setItems] = useState(carouselItems)

  const handleCardClick = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    )
  }

  return (
    <CarouselContainer>
      {items.map(item => (
        <Card key={item.id} onClick={() => handleCardClick(item.id)}>
          <CardImage
            src={item.selected ? item.gifSrc : item.imgSrc}
            alt={item.title}
          />
          <CardContent>
            {item.selected && (
              <FadeIn>
                <CardSubtitle>{item.subTitle}</CardSubtitle>
                <ViewLink
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Site / Source Code
                </ViewLink>
              </FadeIn>
            )}
          </CardContent>
        </Card>
      ))}
    </CarouselContainer>
  )
}

const carouselItems = [
  {
    id: 0,
    title: "Foward Thinking Pyschology",
    subTitle: "I worked as a Front-End Dev for this site",
    imgSrc: require("../assets/images/FTPsychStatic.png"),
    gifSrc: require("../assets/images/FTPsychGif.gif"),
    link: "https://www.ftpsych.ca/",
    selected: false,
  },
  {
    id: 1,
    title: "Sebastian Knox Woodwinds Services",
    subTitle: `I worked Front-End Dev for this \n Saxophone
       Service & E-commerce Site.`,
    imgSrc: require("../assets/images/SebastianKnoxStatic.png"),
    gifSrc: require("../assets/images/SebastianKnoxGif.gif"),
    link: "https://www.sebastianknox.com/",
    selected: false,
  },
  {
    id: 2,
    title: "Scheduler",
    subTitle: "An app for managing work appointments ",
    imgSrc: require("../assets/images/SchedulerStatic.png"),
    gifSrc: require("../assets/images/SchedulerGIF.gif"),
    link: "https://github.com/Don-Stevenson/scheduler",
    selected: false,
  },
  {
    id: 3,
    title: "Movie-DB",
    subTitle: "An app that returns movie search results.",
    imgSrc: require("../assets/images/MovieDBstatic.png"),
    gifSrc: require("../assets/images/batman.gif"),
    link: "https://github.com/Don-Stevenson/moviedb",
    selected: false,
  },
  {
    id: 4,
    title: "Nag-me",
    subTitle: "A nudge-theory goal attainment app",
    imgSrc: require("../assets/images/NagMe-static.png"),
    gifSrc: require("../assets/images/NagMe.gif"),
    link: "https://github.com/Don-Stevenson/nag-me",
    selected: false,
  },
  {
    id: 5,
    title: "The Weather App",
    subTitle: "An app that returns weather results.",
    imgSrc: require("../assets/images/WeatherAppStatic.jpg"),
    gifSrc: require("../assets/images/WeatherAppGif.gif"),
    link: "https://github.com/Don-Stevenson/weather-app",
    selected: false,
  },
]
