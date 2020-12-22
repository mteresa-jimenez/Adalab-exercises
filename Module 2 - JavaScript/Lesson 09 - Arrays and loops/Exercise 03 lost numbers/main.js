"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];
let pairLostNumbers = [];

function bestLostNumber() {
  for (let pairLostNumber of lostNumbers) {
    const pairNumber = lostNumbers % 2 === 0;
    pairLostNumbers.push(pairNumber);
  }

  return pairLostNumbers;
}

bestLostNumber();
console.log(pairLostNumbers);
