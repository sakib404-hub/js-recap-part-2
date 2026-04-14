const disha = 78;
const salman = 78;
disha > salman
  ? console.log("Disha will get the strawberry!")
  : console.log("Salman will get the strwberry");

function getMax(numOne, numTwo) {
  if (numOne > numTwo) {
    return numOne;
  } else {
    return numTwo;
  }
}
const max = getMax(89, 978);
const max2 = getMax(78, 3892);
console.log("Maximum number is : ", getMax(max, max2));
