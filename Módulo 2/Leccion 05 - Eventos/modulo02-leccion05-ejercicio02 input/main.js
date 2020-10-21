"use strict";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

function showName() {
  const nameInput = input.value;
  console.log(`Hola ${nameInput}`);
}

btn.addEventListener("click", showName);
