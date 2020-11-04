import React, { Component } from "react";
import "../App.css";

class MediaCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="avatar" src={this.props.image} />
          <div className="name-date">
            <h1>{this.props.name}</h1>
            <h3>{this.props.date}</h3>
          </div>
        </header>
        <main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </main>
        <footer className="footer">
          <p>Leer más...</p>
          <p>
            37 <span className="icon">&hearts;</span>
          </p>
        </footer>
      </div>
    );
  }
}

export default MediaCard;
