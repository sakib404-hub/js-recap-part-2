/**
 * ? function is a block of code or line of code
 * ? a set of statements that performs tasks when it is called
 * ? maintains a relationship with the input and the output
 */

console.log("We will learn function here!");

function singaraAnek() {
  console.log("age taka dau");
  console.log("Taka paisi akhon dokane jai");
  console.log("singara kinlam");
  console.log("singara bashy niye aslam");
}

singaraAnek(); //? calling the function as singaraAnek

/**
 * ? function functionName(parameters){ statements }
 */

function fanOffKor() {
  console.log("Bosa theke uthe dara");
  console.log("walk towards the swtich");
  console.log("switch e guta mar");
}

fanOffKor(); //? calling the function fanOffKor

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
const result = add(5, 7);
console.log("The summiation of two number is : ", result);
