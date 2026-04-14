function multiply(numberOne, numberTwo) {
  if (typeof numberOne !== "number" || typeof numberTwo !== "number") {
    return "Please Provide a Number!";
  }
  return numberOne * numberTwo;
}

const result = multiply(7, 7);
console.log("The resulted multiplication is : ", result);

function fullName(firstName, lastName) {
  if (
    typeof firstName !== "String".toLowerCase() ||
    typeof lastName !== "String".toLowerCase()
  ) {
    return "please provide a string!";
  }
  return firstName + " " + lastName;
}

const result2 = fullName("sakib", "hossen");
console.log(result2);

function getPrice(product) {
  if (typeof product !== "object") {
    return "Kindly provide a product!";
  }
  if (Array.isArray(product)) {
    return "Kindly provide a product!";
  }
  return product.price;
}

const price = getPrice({ name: "dairy", price: 200, color: "black" });
console.log(price);
