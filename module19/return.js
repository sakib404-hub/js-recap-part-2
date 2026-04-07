/**
 * ? In function we use another keyword known as return ---> it is used to return a value fo the caller calling the function
 */

function tenTimes(number) {
  return number * 10;
}

function cutHalf(number) {
  const result = number / 2;
  return result;
}

function add(price1, price2) {
  const result = price1 + price2;
  return result;
}
const bill = add(5, 80);
console.log(bill);

function add2(price1, price2) {
  return price1 + price2;
}
const bill2 = add2(5, 80);
console.log(bill);

function doMath(numOne, numTwo) {
  const sum = numOne + numTwo;
  const sub = numOne - numTwo;
  const mult = sum * sub;
  const result = mult / 2;
  return result;
}
console.log(doMath(10, 5));

function isEven(number) {
  const result = number % 2 === 0 ? true : false;
  return result;
}
console.log(isEven(5));
console.log(isEven(110));

function isOdd(number) {
  const result = number % 2 !== 0 ? true : false;
  return result;
}
console.log("-------------------------------------");
console.log(isOdd(9));
console.log(isOdd(12));
