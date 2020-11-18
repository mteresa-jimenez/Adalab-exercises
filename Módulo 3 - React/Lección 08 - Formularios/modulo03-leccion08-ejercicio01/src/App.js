import React from "react";
import Form from "./Form";
import Card from "./Card";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
    };
    this.handleChangeFilm = this.handleChangeFilm.bind(this);
  }

  //1. Cambio estado con lo que manda el formulario y lo que envío a Card

  handleChangeFilm(data) {
    this.setState({ film: data });
    console.log(data.value);
  }

  render() {
    return (
      <div className="App">
        {/* 2. Envío la función que cambia el estado a form */}
        <Form handleChangeFilm={this.handleChangeFilm} />

        {/* Envío el estado con el objeto */}
        <Card stateFilm={this.state.film} />
      </div>
    );
  }
}

export default App;
