"use strict";

const button = document.querySelector(".js-button");
const background = document.querySelector(".js-background");

function handleButtonClick() {
  button.classList.toggle("btn-changes");

  if (button.classList.contains("btn-changes") === true) {
    background.classList.add("background");
  } else if (button.classList.contains("btn-changes") === false) {
    background.classList.remove("background");
  }
}

button.addEventListener("click", handleButtonClick);
