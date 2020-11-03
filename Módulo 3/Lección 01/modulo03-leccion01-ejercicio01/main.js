"use strict";

class Square {
  perimeter(side) {
    return 4 * side;
  }

  area(side) {
    return Math.pow(side, 2);
  }
}

const figure = new Square();
console.log(figure.perimeter(9));
console.log(figure.area(9));
