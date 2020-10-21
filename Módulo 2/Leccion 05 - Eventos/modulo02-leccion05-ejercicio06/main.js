"use strict";

const inputText = document.querySelector(".input-text");
const paragraph = document.querySelector(".paragraph");

function addText(event) {
  paragraph.innerHTML = event.currentTarget.value;
}

inputText.addEventListener("change", addText);
