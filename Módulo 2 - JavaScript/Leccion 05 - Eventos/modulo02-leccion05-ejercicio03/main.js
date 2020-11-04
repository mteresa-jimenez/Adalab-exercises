"use strict";

const paragraph = document.querySelector(".paragraph--visible");

function addParagraph() {
  const visibleParagraph = document.querySelector(".paragraph--hidden");
  visibleParagraph.classList.toggle("paragraph--visible");
}
paragraph.addEventListener("mouseover", addParagraph);
