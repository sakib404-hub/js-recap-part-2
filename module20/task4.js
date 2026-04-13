function longestWord(str) {
  const words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (longest.length < word.length) {
      longest = word;
    }
  }

  return longest;
}
const str = "Hellow i am calling from programming hero";
const result = longestWord(str);
console.log("Longest word in the sentense is : ", result);
