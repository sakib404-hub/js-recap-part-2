const jim = 10;
const dim = 89;
const kim = 78;

if (jim > dim && jim > kim) {
  console.log("Jim got the highest mark : ", jim);
} else if (dim > jim && dim > kim) {
  console.log("Dim got the highest number : ", dim);
} else {
  console.log("Kim got the highest number : ", kim);
}

function maxOfThree(numOne, numTwo, numThree) {
  const max =
    numOne > numTwo
      ? numOne > numThree
        ? numOne
        : numThree
      : numTwo > numThree
        ? numTwo
        : numThree;
  return max;
}

const result = maxOfThree(27, 89, 22);
console.log("Maximum number among the numbers are : ", result);
const number = [10, 28, 19, 278, 39, 93, 73, 902];
console.log(...number);
console.log("Maximum number in the array : ", Math.max(...number));
