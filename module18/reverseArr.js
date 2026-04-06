/**
 * ? reverse() ---> Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
 * ? unshift() ---> Inserts new elements at the start of an array, and returns the new length of the array.
 * ? push() --> Appends new elements to the end of an array, and returns the new length of the array.
 */

const numbers = [1, 2, 3, 4, 5];

console.log(numbers);
console.log(numbers.reverse()); //? way -1
numbers.reverse();

//? way-2
let reversed = [];
for (let i = 0; i < numbers.length; i++) {
  reversed.unshift(numbers[i]);
}
console.log(reversed);

//? way-3
reversed = [];
for (let num of numbers) {
  reversed.unshift(num);
}
console.log(reversed);

//? way-4
let rev = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  rev.push(numbers[i]);
}
console.log(rev);
