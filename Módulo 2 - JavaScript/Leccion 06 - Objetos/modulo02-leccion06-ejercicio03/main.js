"use strict";

const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
};

console.log(
  `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`
);

const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
};

console.log(
  `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`
);

adalaber1.run = "Estoy corriendo.";
console.log(adalaber1.run);

adalaber1.runMarathon = (distance) =>
  `Estoy corriendo un maratón de ${distance} kilómetros`;

console.log(adalaber1.runMarathon(50));

adalaber1.showBio = function () {
  return `Hola me llamo ${this.name} tengo ${this.age} años y soy ${this.job}`;
};

console.log(adalaber1.showBio());

adalaber2.showBio = function () {
  return `Hola me llamo ${this.name} tengo ${this.age} años y soy ${this.job}`;
};

console.log(adalaber2.showBio());
