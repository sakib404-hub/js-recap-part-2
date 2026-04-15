/**
 * ? Fall through is a case in switch case where if a condition is matched and there is no break after that the
 * ? compiler stats to executes all of the operation after that
 * ? day = 3 → case 3 match করেছে
 * ? কিন্তু break নাই ❌
 * ? তাই নিচের সব case-এ fall through করেছে
 * ? break paile stop korbe!
 * ? fall through = এক case থেকে নিচের case-এ চলে যাওয়া
 */

let day = 3;
switch (day) {
  case 1:
    console.log("This is Saturday");
  case 2:
    console.log("This is sunday");
    break;
  case 3:
    console.log("This is Monday!");
  case 4:
    console.log("This is tuesday!");
    break;
  default:
    console.log("Kindly input a valid day");
}

//? this is the correct way , after implementing the break in the case there will be no fall through
let daya = 2;
switch (daya) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  default:
    console.log("Other day");
}

//? intentional fall through

const fruits = "apple";
switch (fruits) {
  //? this is a intentional fall through
  case "apple":
  case "banana":
    console.log("This is a fruit");
    break;
  default:
    console.log("Kindly enter a valid banana!");
}
