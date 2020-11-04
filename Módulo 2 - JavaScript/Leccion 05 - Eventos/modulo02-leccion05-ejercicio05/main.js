"use strict";

const background = document.querySelector(".js");

function changeColor(event) {
  if (event.code === KeyR) {
    background.classList.add("key-r");
  } else if (event.code === KeyM) {
    background.classList.add("key-m");
  }
}

background.addEventListener("keydown", changeColor);
