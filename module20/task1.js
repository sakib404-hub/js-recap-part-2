//? functions for converting celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
const fahrenheit = celsiusToFahrenheit(78);
console.log("The following degree in fahrengheit will be : ", fahrenheit);

//? function for converting fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8;
  return celsius;
}
const celsius = fahrenheitToCelsius(172.4);
console.log("The following degree is in celsius : ", celsius);
