const numbers = [1, 2, 3];
let copiedArray = [].concat(numbers);
copiedArray[0] = 99;

console.log(numbers);
console.log(copiedArray);
