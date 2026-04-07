/**
 * ? parameters are only accessable in the function we declar off --> Variables written inside the function definition
 * ? with the value we are calling will be known as the arguments --> Actual values passed into the function when calling it
 */

function doubleIt(number) {
  return number * 2;
}

console.log("Now, i will be calling the function");
console.log(doubleIt(15));
console.log("---------------------------");
console.log(doubleIt(88));
console.log("---------------------------");
console.log(doubleIt(873));
let number = 70;
console.log(doubleIt(number));
let money = 800;
console.log(doubleIt(money));

function diff(numOne, numTwo) {
  const result = numOne > numTwo ? numOne - numTwo : numTwo - numOne;
  return result;
}
console.log(diff(90, 89));
