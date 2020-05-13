import React from "react";
import NagMe from "../components/assets/images/NagTrackerChart.png";
import MovieDB from "../components/assets/images/batman movieDB.png";
import Scheduler from "../components/assets/images/Main interface.png";

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
  render() {
    return <p>Carousel here</p>;
  }
}

export default Carousel;
