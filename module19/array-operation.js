/**
 * ? write a function to give me the sum of all numbers in an array
 * ? if we do not return anything from the function but still we want to get a return value it will result in  undefined
 * ? if written  retun ----> it will also give us undefined
 */

function sumOfNumbers(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

let numbers = [10, 72, 187, 27, 82, 28, 38, 42, 36, 67];
const sum = sumOfNumbers(numbers);
console.log("sum of numbers is : ", sum);

function evenNumbers(numbers) {
  let even = [];
  for (let num of numbers) {
    num % 2 === 0 && even.push(num);
  }
  return even;
}
const evenNums = evenNumbers(numbers);
console.log("Even Numbers in the array is : ", evenNums);

function oddNumbers(numbers) {
  let odds = [];
  for (let num of numbers) {
    num % 2 !== 0 && odds.push(num);
  }
  return odds;
}
const oddNums = oddNumbers(numbers);
console.log("Odd Numbers in the array is : ", oddNums);
