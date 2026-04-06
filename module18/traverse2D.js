/**
 * ? Array of Array
 */

const numbers = [1, 2, 5, 4, 6];
const tournamentsRuns = [[], [], []];
const examMarks = [
  [98, 78, 87, 27, 78],
  [54, 89, 74, 77, 63],
  [88, 28, 90, 67, 99],
  [47, 57, 66, 88, 94],
];

console.log(examMarks[0]);
const firstClassMarks = examMarks[0][0];
console.log(firstClassMarks);

for (let arrays of examMarks) {
  console.log(arrays);
  for (let mark of arrays) {
    console.log(mark);
  }
}
