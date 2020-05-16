import React from "react";

import NagMeGif from "../components/assets/images/NagMe.gif";
import MovieDBGif from "../components/assets/images/batman.gif";
import SchedulerGif from "../components/assets/images/Scheduler.gif";
import NagMeStatic from "../components/assets/images/NagMe-static.png";
import MovieDBStatic from "../components/assets/images/Batman-static.png";
import SchedulerStatic from "../components/assets/images/Scheduler-static.png";

import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Nag-me",
          subTitle: `A mobile first, nudge theory goal attainment app`,
          imgSrc: NagMeStatic,
          link: "https://github.com/Don-Stevenson/nag-me",
          selected: false
        },
        {
          id: 1,
          title: "Movie-DB",
          subTitle: "A movie DB app that returns movie search results.",
          imgSrc: MovieDBStatic,
          link: "https://github.com/Don-Stevenson/moviedb",
          selected: false
        },
        {
          id: 2,
          title: "Scheduler",
          subTitle: "An app for managing work appointments ",
          imgSrc: SchedulerStatic,
          link: "https://github.com/Don-Stevenson/scheduler",
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    // onclick logic to select an item
    items[id].selected = items[id].selected ? false : true;
    // logic to display only one item at a time with gifs when selceted
    items.forEach(item => {
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
        item.imgSrc = MovieDBGif;
      }
      if (item.id === 1 && !item.selected) {
        item.imgSrc = MovieDBStatic;
      }
      if (item.id === 2 && item.selected) {
        item.imgSrc = SchedulerGif;
      }
      if (item.id === 2 && !item.selected) {
        item.imgSrc = SchedulerStatic;
      }
    });

    // update state
    this.setState({
      items
    });
  };

  //create a card compoment for each item
  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={event => this.handleCardClick(item.id, event)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
