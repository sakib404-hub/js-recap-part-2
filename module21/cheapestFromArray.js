console.log("Here we will be finding cheaptest from an array of objects");
const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];

function getMin(numbers) {
  const min = Math.min(...numbers);
  return min;
}

const cheap = getMin(prices);
console.log("Chepest one is : ", cheap);
