/**
 * ? chair - 3cft
 * ? table - 10cft
 * ? bed - 50cft
 */

function woodQuantitiyCalculator(chair, table, bed) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const totalWood =
    perChairWood * chair + perTableWood * table + perBedWood * bed;
  return totalWood;
}

const result = woodQuantitiyCalculator(6, 1, 2);
console.log(`Total wood needed is : ${result}  cft`);
