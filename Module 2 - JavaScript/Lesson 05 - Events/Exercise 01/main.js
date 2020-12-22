"use strict";

const message = document.querySelector("p");
const button = document.querySelector(".myfirstclick");

function showMessage() {
  console.log("Mi primer click, ¡ole yo y la mujer que me parió!");
  message.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener("click", showMessage);
