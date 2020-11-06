import React, { Component } from "react";
import "./App.css";

class Item extends Component {
  render() {
    return (
      <div>
        <h5 className="quantity">Cantidad: {this.props.quantity}</h5>
        <div>
          <h5>Nombre del producto: {this.props.name}</h5>
          <h6 className="text-muted">Descripción: {this.props.description}</h6>
        </div>
        <div className="badge badge-info">Categoría: {this.props.category}</div>
        <h5 className="price">Precio: {this.props.price}€</h5>
      </div>
    );
  }
}

export default Item;
