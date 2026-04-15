/**
 * ? Js hoisting is a behavior where a variable and function are moved to the top of their scope during the compilation phase or before the code actually runs
 * ? JavaScript Hoisting হলো এমন একটা behavior যেখানে JavaScript কোড run হওয়ার আগে variable এবং function declaration গুলোকে তাদের scope-এর উপরে তুলে নেয় (move করে দেয়)।
 * ? শুধু declaration hoist হয়, initialization হয় না।
 */

console.log(x);
var x = 5;

/**
 * ? using var ---> decleared variables are hoisted, এগুলাও hoist হয়, কিন্তু ব্যবহার করা যায় না আগে
 * ? এরা থাকে Temporal Dead Zone (TDZ)-এ
 * ? initialized with undefined
 */

/**
 * ? let and const hoisting ----> they are also hoisted but they stay in a temporal dead zone untill initalied!, এগুলাও hoist হয়, কিন্তু ব্যবহার করা যায় না আগে
 * ? এরা থাকে Temporal Dead Zone (TDZ)-এ
 */

console.log(a);
var a = 10;
//? js hoiting means taking the variable and the function to the top of the scope but only the decleartion is hoisted not the initialization
var a;
console.log(a);
a = 10;

console.log(b);
let b = 10;
//? let and const decleration is also hoisted but they are trapped in a temporal dead zone before initialized therefore we will get a reference error

//? for the function declaration the whole function is hoited and for the function expression they are treated as variables
sayHi();
function sayHi() {
  console.log("Hellow i am from hoiting!");
}

//? “Function beats var in hoisting” 💥
