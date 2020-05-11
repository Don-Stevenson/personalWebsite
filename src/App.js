import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Don Stevenson",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "about", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Never Stop Learning",
        subTitle: "Projects that make a difference",
        text: "Checkout my projects below"
      },
      about: {
        title: "About me"
      },
      contact: {
        title: "Talk to me"
      }
    };
  }

  render() {
    return <Router> Hello</Router>;
  }
}

export default App;
