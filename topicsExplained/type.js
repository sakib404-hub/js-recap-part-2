/**
 * ? typeof null === 'object ---> it is a historical bug in js
 * ? before the begining of js values were stored in memory with type tag
 * ? object ---> 000
 * ? null ----> 000
 * ? therefoere the engine thinks typeof null == 'object'
 * ? it was fixed mainly for two reason , many of the old codes will not use useable(breake)
 */
console.log(typeof 10);
console.log(typeof "sakib");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof [10, 12, 13]);
console.log(typeof { name: "shakib", age: 20 });
console.log(typeof NaN);

//? this is the reason why typeof array is object because inside it, thinks and acts like an object
//? object --->? key - value paired
//? array ---> index based key value paired thats another reason of typeOfArray is object
let arr = [10, 20, 30];
let arr2 = {
  0: 10,
  1: 20,
  2: 30,
  length: 3,
};
