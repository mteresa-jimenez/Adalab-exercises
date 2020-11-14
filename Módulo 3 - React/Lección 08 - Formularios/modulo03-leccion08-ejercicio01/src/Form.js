import React, { Component } from "react";
import "./App.css";

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <form className="container">
          <label htmlFor="label">Título:</label>
          <input
            id="name"
            type="text"
            value={this.props.text}
            onChange={this.handleChange}
          />
          {/* <label htmlFor="label">Descripción:</label>
          <textarea
            name="description"
            id="description"
            value=""
            onChange={this.handleChange}
          >
            {this.state.description}
          </textarea>
          <label htmlFor="language">idioma:</label>
          <select name="language" id="language" onChange={this.handleChange}>
            <option value="eng">Inglés</option>
            <option value="spa">Español</option>
            <option value="port">Portugués</option>
          </select> */}
        </form>
        <p className="paragraph">{this.props.text}</p>
      </>
    );
  }
}

export default Form;
