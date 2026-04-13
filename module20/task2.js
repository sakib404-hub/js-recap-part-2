function numberRepeated(numbers, find) {
  let count = 0;
  for (let num of numbers) {
    if (num === find) {
      count++;
    }
  }
  return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
const find = 25;
const result = numberRepeated(numbers, find);
console.log("The repeated count of the number is : ", result);
