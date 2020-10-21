"use strict";

let buttonOk = document.querySelector(".js-button--ok");
let buttonError = document.querySelector(".js-button--error");
const background = document.querySelector(".js-background");

function handleButtonClick() {
  buttonOk.classList.toggle("btn-ok-changes");
  buttonOk = event.currentTarget;

  // if (buttonOk.classList.contains("btn-ok-changes") === true) {
  //   background.classList.add("background-ok");
  // } else if (buttonOk.classList.contains("btn-ok-changes") === false) {
  //   background.classList.remove("btn-ok-changes");
  // }

  // if (buttonError.classList.contains("btn-error-changes") === true) {
  //   background.classList.add("background-error");
  // } else if (buttonError.classList.contains("btn-error-changes") === false) {
  //   background.classList.remove("btn-error-changes");
  // }
}

buttonOk.addEventListener("click", handleButtonClick);
buttonError.addEventListener("click", handleButtonClick);
