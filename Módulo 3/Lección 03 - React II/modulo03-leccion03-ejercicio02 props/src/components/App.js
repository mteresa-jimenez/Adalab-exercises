import React, { Component } from "react";
import MediaCard from "./MediaCard";
import avatar from "../images/foto Maria Teresa Jiménez Novillo.jpg";
import "../App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <MediaCard
        name="Teresa Jiménez"
        date="Lunes 26 de junio de 2017"
        image={avatar}
      />
    );
  }
}

export default App;
