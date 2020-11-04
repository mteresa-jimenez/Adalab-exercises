"use strict";

const numbers = [1, 2, 3];
const ul = document.querySelector(".js-list");

// function addListElements() {
for (const number of numbers) {
  const li = document.createElement("li");
  ul.appendChild(li);
  const text = document.createTextNode(number);
  li.appendChild(text);
  console.log(li);
}
// }

// addListElements();
