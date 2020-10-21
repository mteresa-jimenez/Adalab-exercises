"use strict";

const marks = [5, 4, 6, 7, 9];

function inflate(mark) {
  return mark + 1;
}

const inflatedMarks = marks.map(inflate);

// const inflatedMarks = marks.map((mark) => mark + 1);

console.log(inflatedMarks);
