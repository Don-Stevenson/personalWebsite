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
          link: "from git hub",
          selected: false
        },
        {
          id: 1,
          title: "Movie-DB",
          subTitle: "A React based app the returns info on a movie query",
          imgSrc: MovieDB,
          link: "from git hub",
          selected: false
        },
        {
          id: 3,
          title: "Scheduler",
          subTitle: "A React based app for booking appointments ",
          imgSrc: MovieDB,
          link: "from git hub",
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
