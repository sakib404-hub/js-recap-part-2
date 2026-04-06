const colors = ["red", "blue", "green", "yellow", "orange"];
let reversedColors = [];
for (let color of colors) {
  reversedColors.unshift(color);
}

console.log(colors);
console.log(reversedColors);
console.log(colors.reverse());
