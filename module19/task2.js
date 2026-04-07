function multiOrDivide(number) {
  const result = number % 2 === 0 ? number / 2 : number * 2;
  return result;
}
const result = multiOrDivide(90);
console.log("The result is : ", result);
