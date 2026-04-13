console.log("Here i will convert inch to feet!");

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

const shakibHeight = inchToFeet(65);
console.log("Height of shakib is  : ", shakibHeight.toFixed(2));

function inchToFeet2(inch) {
  const fractionNumber = inch / 12;
  const feetNumber = parseInt(fractionNumber);
  const inchNumber = inch % 12;
  const result = `${feetNumber} feet and ${inchNumber} inch`;
  return result;
}

const shuvoHeight = inchToFeet2(75);
console.log(shuvoHeight);

function mileToKilo(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}

function kiloToMile(kilo) {
  const mile = kilo * 0.6214;
  return mile;
}
