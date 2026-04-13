/**
 * ? year will be leap year if it is divisable by 4
 * ? or the year is divisable by 400 and the year will not be divisable by 100
 * ? therefore the year will be a leap year and others will not be leap year
 */

function leapYearOrNot(year) {
  if ((year % 4 === 0 || year % 400 === 0) && year % 100 !== 0) {
    return "it is a leap year";
  } else {
    return "it is not a leap year";
  }
}
const check = leapYearOrNot(2020);
console.log(check);
