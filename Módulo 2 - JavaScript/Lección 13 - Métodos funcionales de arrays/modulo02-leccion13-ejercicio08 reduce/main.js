"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

const winnerRunner = function (acc, runner) {
  console.log("acc", acc);
  console.log("runner", runner);

  if (runner.time < acc.time) {
    return runner;
  } else {
    return acc;
  }
};

const winner = runners.reduce(winnerRunner);

console.log(winner.name);
