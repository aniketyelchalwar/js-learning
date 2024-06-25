var firstName = "Jenny";
var lastName = "Sharma";
var marks= "90%"
//console.log("First name is: ", firstName, " and Last name is: ", lastName, " Marks:", marks);

console.log(`First name is: ${firstName} and Last name is: ${lastName}, Marks: ${marks}`);




var num1 = 100;
var num2 = 200;

console.log(`Number 1: ${num1}, Number 2: ${num2} `);
console.log(`Addition is ${num1 + num2}`);

console.log(`My "Life", My Rule`);


console.log(`========== toUppercase() ==============`);
var lastName = "Sharma";
var result = lastName.toUpperCase();
console.log(`Last name in upper case is: ${lastName}`);



console.log(`========== replace() ==============`);
var greet = "Good Morning";
var result = greet.replace("Good", "Afternoon");
console.log(`After replace : ${result}`);



console.log(`========== trim() ==============`);
var city = "  Pune   ";
console.log(`Length before trim is: ${city.length}`);
city = city.trim();
console.log(`Length after trim is: ${city.length}`);

console.log(`========== includes() ==============`);
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is "nin" includes: ${result}`);

var result = greet.includes("z");
console.log(`Is "z" includes: ${result}`);

console.log(`========== split() ==============`);
var myName = "Gajanan Kharat";
var result = myName.split(" ");
console.log(` Total number of words: ${result.length}`);

var word = "My life My Rule";
var result = word.split(" ");
console.log(` Total number of words: ${result.length}`);