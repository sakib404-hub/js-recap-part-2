const products = [
  { name: "shampoo", price: 300, brand: "Sunsilk" },
  { name: "soap", price: 80, brand: "Lux" },
  { name: "toothpaste", price: 120, brand: "Colgate" },
  { name: "facewash", price: 250, brand: "Garnier" },
  { name: "lotion", price: 400, brand: "Vaseline" },
  { name: "oil", price: 350, brand: "Parachute" },
];
let sum = 0;

function getShoppingTotal(products) {
  let sum = 0;

  for (let product of products) {
    sum += product.price;
  }
  return sum;
}

const result = getShoppingTotal(products);
console.log("Total ajk khosabe  : ", result);
