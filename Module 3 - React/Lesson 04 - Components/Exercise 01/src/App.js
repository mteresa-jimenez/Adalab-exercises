import React, { Component } from "react";
import Item from "./Item";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.arrayOfItems = [
      {
        name: "Cereales con chocolate",
        description: "Cereales rellenos de chocolate",
        quantity: 2,
        category: "Cereales",
        price: 5,
      },
      {
        name: "Hamburguesa con queso",
        description: "Hamburguesa rica y saludable",
        quantity: 1,
        category: "Fast-food",
        price: 15,
      },
      {
        name: "Agua mineral",
        description: "Agua de un charco del Himalaya",
        quantity: 2,
        category: "Bebida",
        price: 5,
      },
    ];
  }

  render() {
    let html = [];
    for (let index = 0; index < this.arrayOfItems.length; index++) {
      html.push(
        <li key={index}>
          <Item
            quantity={this.arrayOfItems[index].quantity}
            name={this.arrayOfItems[index].name}
            description={this.arrayOfItems[index].description}
            category={this.arrayOfItems[index].category}
            price={this.arrayOfItems[index].price}
          />
        </li>
      );
    }

    return <ul className="item-list">{html}</ul>;
  }
}

export default App;
