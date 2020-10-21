"use strict";

const times = [56, 9, 45, 28, 35];

const accTimes = times.reduce((acc, number) => acc + number, 0);

const averageTimes = accTimes / times.length;

console.log(averageTimes);
console.log(accTimes);
console.log(times.length);
