import React from "react";
import "./App.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    // defino un estado para poder usarlo en todos los componentes
    this.state = {
      id: "",
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({
      // recojo el value y el id del input, para que modifique el estado
      id: ev.currentTarget.id,
      value: ev.currentTarget.value,
    });

    // llamo a la función que cambia que el estado global para luego coger ese valor desde Card
    this.props.handleChangeFilm(this.state);
  }

  render() {
    return (
      <form className="container">
        <label htmlFor="label">Título:</label>
        <input
          id="title"
          type="text"
          // aquí quiero que aparezca el valor del estado
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;
