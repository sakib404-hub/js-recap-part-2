function countZero(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] === "0" && ++count;
  }
  return count;
}
const str = "010101";
console.log("The Number of zero in the string is : ", countZero(str));
