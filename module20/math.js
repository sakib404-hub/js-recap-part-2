// const Math = {
//     min : function min(num1, num2){
//         return num2;
//     }
// }

// console.log(Math.min);
// console.log(Math.max);

const min = Math.min(10, 29, 282, 19, -2, 19, 0, -99);
console.log("Minimum number is : ", min);

const max = Math.max(10, 29, 282, 19, -2, 19, 0, -99);
console.log("Maximum number is : ", max);

console.log("Value of PI is : ", Math.PI.toFixed(4));
console.log("Absolute value of the substaction is : ", Math.abs(5 - 10));

//? we also have Math.round, Math.ceil, Math.floor
console.log(Math.round(21.25));
console.log(Math.round(21.78));

console.log(Math.ceil(21.24));
console.log(Math.floor(21.74));

console.log(Math.random() * 100);
const random = Math.round(Math.random() * (80 - 60 + 1) + 60);
console.log("The Random number is : ", random);
