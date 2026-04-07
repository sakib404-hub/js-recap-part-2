/**
 * ? determine a string has even number of character or not
 */

function evenSizedString(str = "") {
  const length = str.length;
  const result = length % 2 === 0 ? "Even Sized String" : "Odd Sized String";
  return result;
}

console.log(evenSizedString("Dhaka is not Faka anymore!"));
console.log(evenSizedString("Ariyan Ahmed Shakib"));

function doubleOrTripple(number, doDouble) {
  const result = doDouble ? number * 2 : number * 3;
  return result;
}
console.log(doubleOrTripple(6, true));
console.log(doubleOrTripple(6, false));

function numberOfElements(numbers) {
  const len = numbers.length;
  return len;
}
console.log(numberOfElements([10, 12, 18, 27, 87]));

function getAge(person) {
  const age = person.age;
  return age;
}
let person = {
  name: "Md. Sakib Hossen",
  age: 24,
  maritalStatus: "Unmarried",
  passion: "Full Stack web developer",
};
console.log(getAge(person));
