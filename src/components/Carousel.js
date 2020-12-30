import React, { useState } from "react";

import NagMeGif from "../components/assets/images/NagMe.gif";
import MovieDBGif from "../components/assets/images/batman.gif";
import SchedulerGif from "../components/assets/images/SchedulerGIF.gif";
import NagMeStatic from "../components/assets/images/NagMe-static.png";
import MovieDBStatic from "../components/assets/images/MovieDBstatic.png";
import SchedulerStatic from "../components/assets/images/SchedulerStatic.png";

import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Carousel() {
  const [state, setState] = useState({
    items: [
      {
        id: 0,
        title: "Nag-me",
        subTitle: "A nudge-theory goal attainment app",
        imgSrc: NagMeStatic,
        link: "https://github.com/Don-Stevenson/nag-me",
        selected: false,
      },
      {
        id: 1,
        title: "Scheduler",
        subTitle: "An app for managing work appointments ",
        imgSrc: SchedulerStatic,
        link: "https://github.com/Don-Stevenson/scheduler",
        selected: false,
      },
      {
        id: 2,
        title: "Movie-DB",
        subTitle: "An app that returns movie search results.",
        imgSrc: MovieDBStatic,
        link: "https://github.com/Don-Stevenson/moviedb",
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
        title: "Movie-DB",
        subTitle: "An app that returns movie search results.",
        imgSrc: MovieDBStatic,
        link: "https://github.com/Don-Stevenson/moviedb",
        selected: false,
      },
      {
        id: 5,
        title: "Movie-DB",
        subTitle: "An app that returns movie search results.",
        imgSrc: MovieDBStatic,
        link: "https://github.com/Don-Stevenson/moviedb",
        selected: false,
      },
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
      if (item.id === 0 && item.selected) {
        item.imgSrc = NagMeGif;
      }
      if (item.id === 0 && !item.selected) {
        item.imgSrc = NagMeStatic;
      }
      if (item.id === 1 && item.selected) {
        item.imgSrc = SchedulerGif;
      }
      if (item.id === 1 && !item.selected) {
        item.imgSrc = SchedulerStatic;
      }
      if (item.id === 2 && item.selected) {
        item.imgSrc = MovieDBGif;
      }
      if (item.id === 2 && !item.selected) {
        item.imgSrc = MovieDBStatic;
      }
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
        <Card
          item={item}
          click={(event) => handleCardClick(item.id, event)}
          key={item.id}
        />
      );
    });
  };

  return (
    <Container fluid={true}>
      <Row className="justify-content-around">{makeItems(state.items)}</Row>
     </Container>
  );
}
