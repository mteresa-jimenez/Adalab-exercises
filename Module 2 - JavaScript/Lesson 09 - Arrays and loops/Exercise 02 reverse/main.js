"use strict";

let arr = [];

function get100Numbers() {
  for (let index = 1; index <= 100; index++) {
    arr.push(index);
  }
  return arr;
}

get100Numbers();
console.log(arr);

function getReversed100Numbers() {
  return arr.reverse(get100Numbers);
}

getReversed100Numbers();
console.log(arr);
