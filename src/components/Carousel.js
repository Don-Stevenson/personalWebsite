import React, { useState } from "react"

// image imports
import MovieDBStatic from "../components/assets/images/MovieDBstatic.png"
import MovieDBGif from "../components/assets/images/batman.gif"

import NagMeStatic from "../components/assets/images/NagMe-static.png"
import NagMeGif from "../components/assets/images/NagMe.gif"

import SchedulerStatic from "../components/assets/images/SchedulerStatic.png"
import SchedulerGif from "../components/assets/images/SchedulerGIF.gif"

import SebastianKnoxStatic from "../components/assets/images/SebastianKnoxStatic.png"
import SebastianKnoxGif from "../components/assets/images/SebastianKnoxGif.gif"

import FTPyschStatic from "../components/assets/images/FTPsychStatic.png"
import FTPyschGif from "../components/assets/images/FTPsychGif.gif"

import WeatherAppStatic from "../components/assets/images/WeatherAppStatic.jpg"
import WeatherAppGif from "../components/assets/images/WeatherAppGif.gif"

// library imports
import Card from "../components/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const carouselItems = [
  {
    id: 0,
    title: "Foward Thinking Pyschology",
    subTitle: "I worked as a Front-End Dev for this site",
    imgSrc: FTPyschStatic,
    link: "https://www.ftpsych.ca/",
    selected: false
  },
  {
    id: 1,
    title: "Sebastian Knox Woodwinds Services",
    subTitle: `I worked Front-End Dev for this \n Saxophone
       Service & E-commerce Site.`,
    imgSrc: SebastianKnoxStatic,
    link: "https://www.sebastianknox.com/",
    selected: false
  },
  {
    id: 2,
    title: "Scheduler",
    subTitle: "An app for managing work appointments ",
    imgSrc: SchedulerStatic,
    link: "https://github.com/Don-Stevenson/scheduler",
    selected: false
  },
  {
    id: 3,
    title: "Movie-DB",
    subTitle: "An app that returns movie search results.",
    imgSrc: MovieDBStatic,
    link: "https://github.com/Don-Stevenson/moviedb",
    selected: false
  },
  {
    id: 4,
    title: "Nag-me",
    subTitle: "A nudge-theory goal attainment app",
    imgSrc: NagMeStatic,
    link: "https://github.com/Don-Stevenson/nag-me",
    selected: false
  },
  {
    id: 5,
    title: "The Weather App",
    subTitle: "An app that returns weather results.",
    imgSrc: WeatherAppStatic,
    link: "https://github.com/Don-Stevenson/weather-app",
    selected: false
  }
]

export default function Carousel() {
  // setting stating via hooks and passing in carousel array in as default
  const [state, setState] = useState({
    carouselItems
  })

  // function that handles what happens when a card is clicked
  // *********************************************************
  const handleCardClick = id => {
    // bringing in carousel items from state using spread operator
    // ***********************************************************
    const carouselItems = [...state.carouselItems]

    // onclick logic to select an item
    // *******************************
    carouselItems[id].selected = carouselItems[id].selected ? false : true

    // logic to display only one item at a time with gifs when selected
    //*****************************************************************
    carouselItems.map(item => {
      if (item.id !== id) item.selected = false
      if (item.id === 0 && item.selected) item.imgSrc = FTPyschGif
      if (item.id === 0 && !item.selected) item.imgSrc = FTPyschStatic
      if (item.id === 1 && item.selected) item.imgSrc = SebastianKnoxGif
      if (item.id === 1 && !item.selected) item.imgSrc = SebastianKnoxStatic
      if (item.id === 2 && item.selected) item.imgSrc = SchedulerGif
      if (item.id === 2 && !item.selected) item.imgSrc = SchedulerStatic
      if (item.id === 3 && item.selected) item.imgSrc = MovieDBGif
      if (item.id === 3 && !item.selected) item.imgSrc = MovieDBStatic
      if (item.id === 4 && item.selected) item.imgSrc = NagMeGif
      if (item.id === 4 && !item.selected) item.imgSrc = NagMeStatic
      if (item.id === 5 && item.selected) item.imgSrc = WeatherAppGif
      if (item.id === 5 && !item.selected) item.imgSrc = WeatherAppStatic
      return item
    })

    // update state after checking to see if a card has been clicked
    // *************************************************************
    setState(prevState => {
      return { ...prevState, carouselItems }
    })
  }

  // create a card compoment for each item
  // *************************************
  const makeCarouselItems = carouselItems => {
    return carouselItems.map(item => {
      return (
        <Col sm>
          <Card
            item={item}
            click={event => handleCardClick(item.id, event)}
            key={item.id}
          />
        </Col>
      )
    })
  }

  return (
    <Container fluid>
      <Row className="justify-content-around" lg="3">
        {makeCarouselItems(state.carouselItems)}
      </Row>
    </Container>
  )
}
