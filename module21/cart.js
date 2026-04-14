const products = [
  { name: "shampoo", price: 300, brand: "Sunsilk", quantity: 10 },
  { name: "soap", price: 80, brand: "Lux", quantity: 20 },
  { name: "toothpaste", price: 120, brand: "Colgate", quantity: 15 },
  { name: "facewash", price: 250, brand: "Garnier", quantity: 8 },
  { name: "lotion", price: 400, brand: "Vaseline", quantity: 5 },
  { name: "oil", price: 350, brand: "Parachute", quantity: 12 },
];

function getTotal(products) {
  let sum = 0;

  for (let product of products) {
    sum += product.price * product.quantity;
  }
  return sum;
}

const result = getTotal(products);
console.log("Total ajk khosabe : ", result);
