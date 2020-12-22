import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Pricing from "./Pricing";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="width">
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/pricing" component={Pricing} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
