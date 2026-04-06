const statement = "Asif am a hard working person";
const reversedWord = statement.split(" ").reverse().join(" ");

console.log(statement);
console.log(reversedWord);

//? I am a hard Working person;
const reversedWordOnly = statement
  .split(" ")
  .map((word) => {
    return word.split("").reverse().join("");
  })
  .join(" ");
console.log(reversedWordOnly);
