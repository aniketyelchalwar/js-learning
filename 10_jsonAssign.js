
const employeeInfo = `{
  "name": "Aleis Melon",
  "id": "E00245",
  "role": ["Dev", "DBA"],
  "age": 23,
  "doj": "11-12-2019",
  "married": false,
  "address": {
    "street": "32, Laham st.",
    "city": "Innsbruck",
    "country": "Austria"
  },
  "referred-by": "E0012"
}`

console.log(`1.JSON String : ${employeeInfo}`);

const employee = JSON.parse(employeeInfo);
console.log(`2.Convert into object :` , employee);





/*
var role = ["Dev", "DBA"];
var array = role.slice(",");
const lastArray = array.length-1;
console.log(lastArray);
*/



