import React from "react";
import NagMe from "../components/assets/images/NagTrackerChart.png";
import MovieDB from "../components/assets/images/batman.gif";
import Scheduler from "../components/assets/images/Scheduler.gif";

import Card from '../components/Card'
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
          subTitle: "A nudge theory goal attainment app",
          imgSrc: NagMe,
          link: "https://github.com/Don-Stevenson/nag-me",
          selected: false
        },
        {
          id: 1,
          title: "Movie-DB",
          subTitle: "A movie DB app that returns movie search results.",
          imgSrc: MovieDB,
          link: "https://github.com/Don-Stevenson/moviedb",
          selected: false
        },
        {
          id: 3,
          title: "Scheduler",
          subTitle: "An app for managing work appointments ",
          imgSrc: Scheduler,
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
    // logic to display only one item at a time
    items.forEach(element => {
      if (element.id !== id) {
        element.selected = true;
      }
    });

    // update state
    this.setState({
      items
    });
  };

  //create a card compoment for each item
  makeItems = items => {return items.map(item=>{
      return <Card item={item} onClick={(event => this.handleCardClick(item.id, event))} key={item.id} />
  })
};

  render() {
    return <Container fluid={true}>
        <Row className="justify-content-around">
            {this.makeItems(this.state.items)}
        </Row>
    </Container>;
  }
}

export default Carousel;
