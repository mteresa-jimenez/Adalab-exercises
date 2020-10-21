"use strict";

const container = document.querySelector(".container");

function changeColor() {
  if (window.scrollY > 250) {
    container.classList.add("scroll-container");
    console.log("hola hola");
  } else {
    container.classList.remove("scroll-container");
  }
}
window.addEventListener("scroll", changeColor);
