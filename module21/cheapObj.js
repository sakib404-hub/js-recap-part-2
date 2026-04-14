// console.log("Here we will discuss cheapestObj");
const mobiles = [
  { name: "samsung", price: 20000, camera: "12MP", color: "black" },
  { name: "iphone", price: 80000, camera: "48MP", color: "white" },
  { name: "xiaomi", price: 25000, camera: "64MP", color: "blue" },
  { name: "oppo", price: 22000, camera: "32MP", color: "green" },
  { name: "vivo", price: 21000, camera: "50MP", color: "purple" },
  { name: "realme", price: 18000, camera: "16MP", color: "gray" },
];

const chepestPhones = (phones) => {
  let minimum = phones[0];

  for (let phone of phones) {
    if (minimum.price > phone.price) {
      minimum = phone;
    }
  }
  return minimum;
};
const result = chepestPhones(mobiles);
console.log("Cheapest phone is : ", result);

const mostExpensivePhone = (phones) => {
  let maximum = phones[0];

  for (let phone of phones) {
    if (maximum.price < phone.price) {
      maximum = phone;
    }
  }

  return maximum;
};
const result2 = mostExpensivePhone(mobiles);
console.log("Kolija Kata Mobile is : ", result2);
