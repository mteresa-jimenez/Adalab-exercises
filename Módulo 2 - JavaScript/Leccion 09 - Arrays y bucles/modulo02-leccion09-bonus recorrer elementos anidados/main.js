"use strict";

const schedule = [
  ["Kahoot", "Pair programming"],
  ["Kahoot", "Project"],
  ["Pair programming", "Kahoot"],
  ["Agile", "Interviews"],
  ["Project", "Beers"],
];

for (let day = 0; day < schedule.length; day += 1) {
  for (let hour = 0; hour < schedule[day].length; hour += 1) {
    console.log(
      `On day ${day + 1} at hour ${hour + 1} we have ${schedule[day][hour]}`
    );
  }
}
