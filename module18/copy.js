/**
 * ? Spread Operator [...] -->
 * ? array is preemtive type therefore it keeps the reference after copying also
 * ? therefore if we change the value of the original or copied some data in the array it changes the orginal or the copied data also
 * ? keeps the same references in the array ----> keeping the same references
 */

let price = 25;
let comp_price = price;

comp_price = 15;

console.log(price);
console.log(comp_price);

const numbers = [25, 25, 25, 80];
const compNumbers = numbers;

numbers[0] = 15;

console.log(numbers);
console.log(compNumbers);

//? this is one of the ways that we can copy number from one array to another array
let copiedNumber = [];
for (let num of numbers) {
  copiedNumber.push(num);
}
numbers[0] = 99;
console.log(numbers);
console.log(copiedNumber);

//? Another way of copying array to another array
const numbersOne = [1, 2, 3, 4];
const newNumbers = Array.from(numbersOne);
numbersOne.push(8);
console.log(numbersOne);
console.log(newNumbers);

//? Another way of copying array to another array
const numberTwo = [1, 2, 5, 6, 2];
const newNumberOne = [].concat(numberTwo);
newNumberOne.push(99);
console.log(numberTwo);
console.log(newNumberOne);

//? another way of copying array
const priceOne = [109, 27, 82, 927];
const copiedPrice = [...priceOne];
copiedPrice.push(88672);
console.log(priceOne);
console.log(copiedPrice);

/**
 * ? Shallow copy vs deep copy
 */
