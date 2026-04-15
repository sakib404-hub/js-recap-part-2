/**
 * ? in js string exist in two forms  : primitive (normal form)
 * ? String object which is not recomemded --->
 */

const fName = "Md Shakib Hossen";
const lName = new String("Ariyan Ahmed Shakib!");
console.log(fName, lName);
console.log(typeof fName, typeof lName);

/**
 * ? There are various reasons why we do use string rather then string object
 * ? Using String Object gives us --->
 * ? ----> slower performance because normal string is lighter
 * ? ----> object strings are havier
 * ? ----> confusing behavior while checking the value and the type with (===)
 * ? ----> unexpected behavior like typeOf will be object and sometime act like a string
 * ? mamory overhead ---> extra memory + prototype overhead
 */
