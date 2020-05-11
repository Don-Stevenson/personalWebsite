import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Don Stevenson",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "about", path: "/about" },
        { title: "Contact", path: "/contact" }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <p> Hello</p>
      </div>
    );
  }
}

export default App;
