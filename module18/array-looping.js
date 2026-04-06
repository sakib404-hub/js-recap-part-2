const fruits = [
  "apple",
  "guava",
  "water melon",
  "lemon",
  "orenge",
  "Taaaal",
  "Avocado",
];

for (let i = 0; i < fruits.length; i++) {
  //? same tasks can be done through the while loop
  console.log("Fruits in the array --> ", fruits[i]);
}

console.log("================================================");
for (let fruit of fruits) {
  console.log("The fruit is  --> ", fruit);
}

const numbers = [12, 10, 11, 29, 67, 78, 22, 81, 92, 98];
for (let num of numbers) {
  console.log(num);
}
