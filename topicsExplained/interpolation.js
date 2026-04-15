/**
 * ? Interpolation means putting varibale inside the string while making it dynamic value
 * ? making dynamic value inside the string this is known as the interpolation
 * ? Injecting values in a string
 * ? in javascript interpolation is made by using the template literals
 */

const userName = "Md. Sakib Hossen";
console.log(`The user name is : ${userName}`);

/**
 * ? what we can put inside the ${}--> interpolation
 * ? variable -> username
 * ? expression ---> 10 + 8;
 * ? function ---->
 * ? condition ---->
 */

//? interpolation using function
const getName = () => "Ariyan";
console.log(`Name is : ${getName()}`);

//? condition
const age = 17;
console.log(`You can : ${age > 18 ? "vote" : "Teenage"}`);
