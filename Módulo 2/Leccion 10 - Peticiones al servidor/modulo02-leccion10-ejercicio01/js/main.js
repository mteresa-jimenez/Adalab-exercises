"use strict";

function getEmoji() {
  fetch("https://api.rand.fun/number/integer?min=10&max=50")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
document.querySelector(".js-emoji").addEventListener("click", getEmoji);
