const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11];




console.log(`1. Elements available : ${arrayNumber.length}`);





const lastNum = arrayNumber.length-1;
//console.log(lastNum);
console.log(`2.First element and last element in array: ${arrayNumber[0]} , ${arrayNumber[10]}`);



let evenNumbers = [];

for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if (element % 2 === 0) {
        evenNumbers.push(element);
    }
}

console.log(`4.All even numbers: ${evenNumbers.join(', ')}`);





let oddNumbers = [];
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];

    if (element%2 != 0) {
        oddNumbers.push(element);
    } 
}
console.log(`5.All odd number is : ${oddNumbers.join(', ')}`);







const evenPosit = [];
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if (index%2 == 0) {
        evenPosit.push(element)
    }
    
}
console.log(`6.All even positioned elements : ${evenPosit.join(', ')} `);




const oddPosit = [];
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if (index%2 != 0) {
        oddPosit.push(element);
    }
    
}
console.log(`7.All odd positioned elements : ${oddPosit.join(', ')} `);




let sum = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    sum = sum + element;
}
console.log(`8.Sum of all elements : ${sum}`);



console.log(`9.Number 115 is available or not : ${arrayNumber.includes(115)}`);

console.log(`10.Number 23 is available or not : ${arrayNumber.includes(23)}`);


/*
const elementToFind = 115;

if (arrayNumber.includes(elementToFind)) {
    console.log(`9.Number ${elementToFind} available in the array `);
} else {
    console.log(`9.Number ${elementToFind} is not available in the array `);
}


const elementsToFind = 23;

if (arrayNumber.includes(elementsToFind)) {
    console.log(`10.Number ${elementsToFind} available in the array `);
} else {
    console.log(`10.Number ${elementsToFind} is not available in the array `);
}

*/


arrayNumber.splice(3,0,55,66);
console.log(`12.Inserting element at index 3 : ${arrayNumber}`);


arrayNumber.splice(4,3);
console.log(`13.Delete 3 elements staring from index 4 : ${arrayNumber}`);

