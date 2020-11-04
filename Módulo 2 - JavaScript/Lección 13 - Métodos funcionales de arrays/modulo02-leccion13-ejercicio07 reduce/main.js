"use strict";

const times = [56, 9, 45, 28, 35];

const accTimes = times.reduce((acc, time) => acc + time, 0);

// let acc = 0;

// const accTimes = times.reduce(function (acc, time) {
//   console.log(acc);
//   return acc + time;
// });

const averageTimes = accTimes / times.length;

console.log(accTimes);
console.log(times.length);
console.log(averageTimes);
