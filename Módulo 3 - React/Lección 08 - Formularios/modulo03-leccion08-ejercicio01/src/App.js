import React, { Component } from "react";
import Form from "./Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "ii",
    };

    this.changeText = this.changeText.bind(this);
  }

  changeText(event) {
    this.setState({ name: event.current.value });
  }

  render() {
    return (
      <div className="App">
        <Form handleChange={this.changeText} text={this.state.name} />
      </div>
    );
  }
}

export default App;
