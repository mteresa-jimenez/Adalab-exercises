"use strict";

const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

const button = document.querySelector(".js-button");
const list = document.querySelector(".list");

function addListEl() {
  list.innerHTML = `<li>${inception}</li><li>${theButterFlyEffect}</li><li>${eternalSunshineOfTheSM}</li><li>${blueVelvet}</li><li>${split}</li>`;
}

button.addEventListener("click", addListEl);

function selectMovie(event) {
  const selectedMovie = event.target.innerHTML;
  console.log(selectedMovie);
}

list.addEventListener("click", selectMovie);
