function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let ch of str) {
    if (vowels.includes(ch)) {
      count++;
    }
  }
  return count;
}
const str = "Hellow, i am ariyan ahmed shakib";
const result = countVowels(str);
console.log("Numbers of vowels in the string is : ", result);
