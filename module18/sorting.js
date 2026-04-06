/**
 * ? sort() --> Sorts an array in place. This method mutates the array and returns a reference to the same array.
 */
const numbers = [10, 278, 1, 32, 787, 3, 2, 9];
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

const friends = [
  "Salam",
  "Kalam",
  "Alam",
  "Gelam",
  "Balam",
  "Khailam",
  "Ghumailam",
];
console.log(friends);
friends.sort();
console.log(friends);

const ages = [1, 5, 100, 7, 2, 9, 11, 17, 4];
console.log(ages);
ages.sort((a, b) => a - b);
console.log("Ascending Sorted Array ---> ", ages);

const reversedSorted = ages.sort((a, b) => b - a);
console.log("Decending array --> ", reversedSorted);
