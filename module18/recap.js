/**
 * ? ===========VARIABLE========
 * ? const , var, let --> we will be use this things for declearing variable
 */

const price = 500;
console.log(price);

const name = "Kir kir Ali Khan";
console.log(name);

const isPoor = true;
console.log(isPoor);

const friends = ["Salam", "Kalam", "Gelam", "Khailam", "Ghumailam"];
console.log(friends);
console.log(typeof friends);

const student = {
  name: "Md. Sakib Hossen",
  address: "Nagarpur Salimabad",
  class: "University",
  age: 23,
};
console.log(student);

//? condition
price > 1000
  ? console.log("Too Expensive, therefore it is not for me")
  : console.log("Lets go, it's within my budget");

//? looping
let number = 1;
while (number < 10) {
  console.log("PushUp dau");
  if (number == 3) {
    break;
  }
  number++;
}

//? for loop
for (let i = 0; i < 5; i++) {
  console.log("Muri khau");
}
