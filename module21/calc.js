function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subs(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function mult(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function division(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  } else if (operation === "substraction") {
    const result = subs(a, b);
    return result;
  } else if (operation === "multiply") {
    return mult(a, b);
  } else if (operation === "division") {
    return division(a, b);
  } else {
    return "Operation is not allowed!";
  }
}

const result = calculator(5, 7, "add");
console.log("The result of the addition is : ", result);

const result2 = calculator(6, 8, "division");
console.log("The result of the division is : ", result2);

const result3 = calculator(7, 8, "modulo");
console.log("The modulus of the opearation is : ", result3);
