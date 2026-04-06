/**
 * ?
 */
console.log("Here we will discuss about the array of objects");
const numbers = [1, 2, 3, 4, 1];

const players = [{}, {}, {}];
const employee = [
  { name: "Ashik", designation: "Content Writter", salary: 25000 },
  { name: "Atiq", designation: "Developer", salary: 30000 },
  { name: "Abdur Rahim", designation: "Digital Marketer", salary: 21000 },
  { name: "Asifa Rahman", designation: "Web Developer", salary: 30000 },
];

//? for getting the full array of object wee can do this
console.log(employee);

//? for getting specific one we can go with the indexing method
console.log("Full first element of the object array --> ", employee[0]);
console.log("Name -->", employee[0].name);
console.log("Designation --->", employee[0].designation);
console.log("Salary--->", employee[0].salary);
console.log("=========================================");

for (let emp of employee) {
  console.log(emp.name, "---", emp.designation);
}
