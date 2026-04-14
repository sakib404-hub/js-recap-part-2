const heights = [65, 66, 68, 72, 58, 78, 60, 65, 67, 55, 49];
const maxHeight = Math.max(...heights);
const minHeight = Math.min(...heights);
console.log("Tallest among them is : ", maxHeight);
console.log("Vertically Previlleged Height is : ", minHeight);

function getMax(numbers) {
  let max = numbers[0];

  for (let num of numbers) {
    if (max < num) {
      max = num;
    }
  }
  return max;
}

function getMin(numbers) {
  let min = numbers[0];

  for (let num of numbers) {
    if (min > num) {
      min = num;
    }
  }
  return min;
}

const result = getMax(heights);
console.log("The tallest among them is : ", result);

const result2 = getMin(heights);
console.log("Vertically Previlleged Height is : ", result2);
