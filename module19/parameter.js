/**
 * ? function square(number) --> the number is known as the parameter that will be used for the calculation in the function
 * ? square(9) ---> this is known as the function call and the value inside it is known as the argument
 * ? in the function parameter declearation we can also declar and assign a value 0 or 1 from the beginning
 */

function vatKhau() {
  console.log("Hand Wash kore Aso");
  console.log("Khaite Boso");
  console.log("Plate e khabar dabar nau");
  console.log("Gopat Gopat kore khabar Khau");
}
vatKhau();

function square(number) {
  return number * number;
}

let result = square(8);
console.log("Square of the number 8 is : ", result);
console.log("Square of the number 11 is : ", square(11));
console.log("Square of the number 12 is : ", square(12));

function sub(numberOne, numberTwo) {
  let result =
    numberOne > numberTwo ? numberOne - numberTwo : numberTwo - numberOne;
  return result;
}
console.log(
  "Subtraction of numberOne(8) and numberTwo(122) is : ",
  sub(8, 122),
);

function addAll(a, b, c = 0, d = 0, e = 0) {
  return a + b + c + d + e;
}
console.log(addAll(1, 2, 3, 4));
