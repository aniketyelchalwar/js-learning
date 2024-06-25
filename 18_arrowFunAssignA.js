() => {

}
console.log(`1."Good Morning , Today is friday."`);


var multiply = (n1, n2, n3=1) => {
    var result = n1*n2*n3;
    return result;
}
var value = multiply(5,5,2);
console.log(`2.a) The multiplication of three number is: `, value);

var value = multiply(10,4);
console.log(`2.b) The multiplication of three number is: `, value);

var addition = (a1,a2,a3,a4,a5) => {
    var add = a1+a2+a3+a4+a5;
    return add;
}
const addVal = addition(100,100,200,349,756);
console.log(`3.a) Addition of this 100,100,200,349,756 is :`, addVal);
 

const addStr = addition("I am ", "learning ", "ES6 ", "feature ", "in depth. ");
console.log(`3.c) Invoke the string:`, addStr);



