/**
 * ? below 100 or upto 100 ---> every single one cost 100
 * ? more then 100 and less then or equal to 200 ----> 90
 * ? more then 200 --------> 70
 */

function discountedPrice(quantity) {
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  } else if (quantity > 100 && quantity <= 200) {
    const total = quantity * 90;
    return total;
  } else {
    const total = quantity * 70;
    return total;
  }
}

const total = discountedPrice(4000);
console.log("Total price that will cost  : ", total);
