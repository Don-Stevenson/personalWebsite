import React, { useState } from "react";

// image imports
import MovieDBStatic from "../components/assets/images/MovieDBstatic.png";
import MovieDBGif from "../components/assets/images/batman.gif";

import NagMeStatic from "../components/assets/images/NagMe-static.png";
import NagMeGif from "../components/assets/images/NagMe.gif";

import SchedulerStatic from "../components/assets/images/SchedulerStatic.png";
import SchedulerGif from "../components/assets/images/SchedulerGIF.gif";

// To be updated and added later
// *****************************
// import JungleRailsStatic from "../components/assets/images/JungleRailsStatic.png"
// import JungleRailsGif from "../components/assets/images"

import FTPyschStatic from "../components/assets/images/FTPsychStatic.png";
import FTPyschGif from "../components/assets/images/FTPsychGif.gif";

import WeatherAppStatic from "../components/assets/images/WeatherAppStatic.jpg";
import WeatherAppGif from "../components/assets/images/WeatherAppGif.gif";

// library imports
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

export default function Carousel() {
  const [state, setState] = useState({
    items: [
      {
        id: 0,
        title: "Foward Thinking Pyschology",
        subTitle: "I work as Front-End Dev for this clinic",
        imgSrc: FTPyschStatic,
        link: "https://www.ftpsych.ca/",
        selected: false,
      },
      {
        id: 1,
        title: "Nag-me",
        subTitle: "A nudge-theory goal attainment app",
        imgSrc: NagMeStatic,
        link: "https://github.com/Don-Stevenson/nag-me",
        selected: false,
      },
      {
        id: 2,
        title: "Scheduler",
        subTitle: "An app for managing work appointments ",
        imgSrc: SchedulerStatic,
        link: "https://github.com/Don-Stevenson/scheduler",
        selected: false,
      },
      {
        id: 3,
        title: "Movie-DB",
        subTitle: "An app that returns movie search results.",
        imgSrc: MovieDBStatic,
        link: "https://github.com/Don-Stevenson/moviedb",
        selected: false,
      },
      {
        id: 4,
        title: "Weather App",
        subTitle: "An app that returns movie weather results.",
        imgSrc: WeatherAppStatic,
        link: "https://github.com/Don-Stevenson/weather-app",
        selected: false,
      },

      // To be updated and added later
      // *****************************
      // {
      //   id: 5,
      //   title: "Sebastian Knox Woodwinds Services",
      //   subTitle: "I work as Front-End Dev for this E-commerce Site.",
      //   imgSrc: SebastianStatic,
      //   link: "https://github.com/Don-Stevenson/Jungle-Rails",
      //   selected: false,
      // },
    ],
  });

  const handleCardClick = (id) => {
    let items = [...state.items];

    // onclick logic to select an item
    //********************************
    items[id].selected = items[id].selected ? false : true;

    // logic to display only one item at a time with gifs when selected
    //*****************************************************************
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
      if (item.id === 1 && item.selected) {
        item.imgSrc = NagMeGif;
      }
      if (item.id === 1 && !item.selected) {
        item.imgSrc = NagMeStatic;
      }
      if (item.id === 2 && item.selected) {
        item.imgSrc = SchedulerGif;
      }
      if (item.id === 2 && !item.selected) {
        item.imgSrc = SchedulerStatic;
      }
      if (item.id === 3 && item.selected) {
        item.imgSrc = MovieDBGif;
      }
      if (item.id === 3 && !item.selected) {
        item.imgSrc = MovieDBStatic;
      }
      if (item.id === 4 && item.selected) {
        item.imgSrc = WeatherAppGif;
      }
      if (item.id === 4 && !item.selected) {
        item.imgSrc = WeatherAppStatic;
      }
      if (item.id === 0 && item.selected) {
        item.imgSrc = FTPyschGif;
      }
      if (item.id === 0 && !item.selected) {
        item.imgSrc = FTPyschStatic;
      }
      // To be updated and added later
      // *****************************
      // if (item.id === 4 && !item.selected) {
      //   item.imgSrc = SmartToDoStatic;
      // }
      // if (item.id === 5 && item.selected) {
      //   // item.imgSrc = JungleRailsGif;
      // }
      // if (item.id === 5 && !item.selected) {
      //   item.imgSrc = JungleRailsStatic;
      // }
    });

    // update state
    //*************
    setState((prevState) => {
      return { ...prevState, items };
    });
  };

  //create a card compoment for each item
  //*************************************
  const makeItems = (items) => {
    return items.map((item) => {
      return (
        <Col sm>
          <Card
            item={item}
            click={(event) => handleCardClick(item.id, event)}
            key={item.id}
          />
        </Col>
      );
    });
  };

  return (
    <Container fluid>
      <Row className="justify-content-around" lg="3">{makeItems(state.items)}</Row>
    </Container>
  );
}
