import React, { Component } from "react";
import avatar from "../images/foto Maria Teresa Jiménez Novillo.jpg";
import "../App.css";

class MediaCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="avatar" src={avatar} />
          <div className="name-date">
            <h1>Alex Guerrero</h1>
            <h3>Lunes 26 de junio de 2017</h3>
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
