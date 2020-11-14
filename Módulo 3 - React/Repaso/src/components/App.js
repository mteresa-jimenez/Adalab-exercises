import React, { Component } from "react";
import clubs from "../data/clubs.json";
import ClubList from "./ClubList";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(clubs);
    return (
      <div>
        <ClubList club={club} />
      </div>
    );
  }
}

export default App;
