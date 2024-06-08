import React, { useState } from "react"
import styled from "styled-components"
import Card from "../components/Card"

const Container = styled.section`
  padding: 4em;
`
const Row = styled.section`
  padding: 4em;
`
const Col = styled.section`
  padding: 4em;
`

const carouselItems = [
  {
    id: 0,
    title: "Foward Thinking Pyschology",
    subTitle: "I worked as a Front-End Dev for this site",
    imgSrc: require("../components/assets/images/FTPsychStatic.png"),
    gifSrc: require("../components/assets/images/FTPsychGif.gif"),
    link: "https://www.ftpsych.ca/",
    selected: false
  },
  {
    id: 1,
    title: "Sebastian Knox Woodwinds Services",
    subTitle: `I worked Front-End Dev for this \n Saxophone
       Service & E-commerce Site.`,
    imgSrc: require("../components/assets/images/SebastianKnoxStatic.png"),
    gifSrc: require("../components/assets/images/SebastianKnoxGif.gif"),
    link: "https://www.sebastianknox.com/",
    selected: false
  },
  {
    id: 2,
    title: "Scheduler",
    subTitle: "An app for managing work appointments ",
    imgSrc: require("../components/assets/images/SchedulerStatic.png"),
    gifSrc: require("../components/assets/images/SchedulerGIF.gif"),
    link: "https://github.com/Don-Stevenson/scheduler",
    selected: false
  },
  {
    id: 3,
    title: "Movie-DB",
    subTitle: "An app that returns movie search results.",
    imgSrc: require("../components/assets/images/MovieDBstatic.png"),
    gifSrc: require("../components/assets/images/batman.gif"),
    link: "https://github.com/Don-Stevenson/moviedb",
    selected: false
  },
  {
    id: 4,
    title: "Nag-me",
    subTitle: "A nudge-theory goal attainment app",
    imgSrc: require("../components/assets/images/NagMe-static.png"),
    gifSrc: require("../components/assets/images/NagMe.gif"),
    link: "https://github.com/Don-Stevenson/nag-me",
    selected: false
  },
  {
    id: 5,
    title: "The Weather App",
    subTitle: "An app that returns weather results.",
    imgSrc: require("../components/assets/images/WeatherAppStatic.jpg"),
    gifSrc: require("../components/assets/images/WeatherAppGif.gif"),
    link: "https://github.com/Don-Stevenson/weather-app",
    selected: false
  }
]

export default function Carousel() {
  const [state, setState] = useState({
    carouselItems
  })

  const handleCardClick = id => {
    const carouselItems = [...state.carouselItems]
    carouselItems[id].selected = !carouselItems[id].selected

    carouselItems.forEach(item => {
      if (item.id === id) {
        item.imgSrc = item.selected ? item.gifSrc : item.imgSrc
      } else {
        item.selected = false
      }
    })

    setState(prevState => ({
      ...prevState,
      carouselItems
    }))
  }

  const makeCarouselItems = carouselItems => {
    return carouselItems.map(item => (
      <Col sm key={item.id}>
        <Card item={item} click={() => handleCardClick(item.id)} />
      </Col>
    ))
  }

  return (
    <Container fluid>
      <Row className="justify-content-around" lg="3">
        {makeCarouselItems(state.carouselItems)}
      </Row>
    </Container>
  )
}
