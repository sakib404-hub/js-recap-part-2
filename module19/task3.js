function makeAvg(numbers) {
  const length = numbers.length;
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / length;
}
let result = makeAvg([10, 2, 12, 43, 24, 89, 37, 21]);
console.log("The avarage of the elemesnts are : ", result);
