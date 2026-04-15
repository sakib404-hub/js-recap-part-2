/**
 * ? ?? ----> ?? operator ব্যবহার করা হয় যখন তুমি কোনো variable null বা undefined হলে default value দিতে চাও।
 * ? if the value is null or undefined it will take the defaultValue
 * ? and if the value is defined then it would take the default value
 */

const value = 10;
const defaultValue = 1;
const result = value ?? defaultValue;
console.log(result);

const name = "Shakib Hossen";
console.log(name ?? "Guest");

/**
 * ? there is a difference between the OR(||) operator and the nullish coalescing opearator because this operator only checks for null and undefined values
 */

let flag = 0;
console.log(flag || 10); //? as 0 is falsy value the output will be 10
console.log(flag ?? 10); // output will be zero with nullish coalescing operator

function greet(userName) {
  console.log("hellow" + " " + (userName ?? "Guest"));
}
greet();

console.log(false ?? "Hellow");
console.log(false || "Hellow");
