console.log("Here we will practice removing dublicate");

/**
 * ? array will have some dublicate elements
 */
const biriyaniKhor = ["abul", "kabul", "chabul", "babul", "abul", "kabul"];
const numbers = [10, 2, 189, 10, 2, 33, 2, 10, 2, 89, 29, 2, 10];

function removeDublicate(array) {
  const unique = [];
  for (let el of array) {
    // unique.includes(el) ? null : unique.push(el);
    if (!unique.includes(el)) {
      unique.push(el);
    }
  }
  return unique;
}

const unique = removeDublicate(biriyaniKhor);
console.log(biriyaniKhor);
console.log(unique);

const unique2 = removeDublicate(numbers);
console.log(numbers);
console.log(unique2.sort((a, b) => a - b));
