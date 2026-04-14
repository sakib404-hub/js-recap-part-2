function layerdDiscount(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;

  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  } else if (quantity <= 200) {
    const first100Total = first100Price * 100;
    const remainngQuantity = quantity - 100;
    const remainingPrice = remainngQuantity * 90;
    const total = first100Total + remainingPrice;
    return total;
  } else {
    const first100Total = first100Price * 100;
    const second100Total = second100Price * 100;
    const remainngQuantity = quantity - 200;
    const total =
      first100Total + second100Total + remainngQuantity * above200Price;
    return total;
  }
}

const result = layerdDiscount(245);
console.log("The result of the two is : ", result);
