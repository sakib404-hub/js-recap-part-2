const numbers = [10, 17, 11, 89, 22, 90, 76, 55, 99, 101, 110, 278, 89];

//? finding avarage of the odd numbers
function oddAvg(numbers) {
  let sum = 0,
    count = 0;
  for (let num of numbers) {
    num % 2 === 0 ? null : ((sum += num), count++);
  }
  //   console.log(count, numbers.length);
  const avg = (sum / count).toFixed(2);
  return avg;
}

//? finding avarage of the even numbers
function evenAvg(numbers) {
  let sum = 0,
    count = 0;
  for (let num of numbers) {
    num % 2 === 0 ? ((sum += num), count++) : null;
  }
  //   console.log(count, numbers.length);
  const avg = (sum / count).toFixed(2);
  return avg;
}

const avg = oddAvg(numbers);
console.log("Avarage of the odd numbers are : ", avg);

const avg2 = evenAvg(numbers);
console.log("Avarage of the even numbers are : ", avg2);
