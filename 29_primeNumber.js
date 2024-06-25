
console.log(`---------------Count prime from the array---------------`);
function isPrime(num){

    for (let index = 2; index < num; index++) {
       if(num%index== 0){
        return false;
       }        
    }
    return true;

}
isPrime();


const array = [3,9,7,6,19,29,53];

let count = 0;
for (const num of array) {
    if(isPrime(num)){
        count = count + 1;
    }
}

console.log(`Count prime number from array , [3,9,7,6,19,29,53] :` , count);



//Palindrom
console.log(`---------------check string is palindrom or not---------------`);


function isPalindrome(str) {
    
    let reverseStr = str.split("").reverse().join("");
    if (str===reverseStr) {
        console.log(`Given string is palindrom : ${str} `);
    } else{
        console.log(`Given string is not palindrom : ${str}`);
    }
    
}
var result = isPalindrome("madam");
var result = isPalindrome("141");
var result = isPalindrome("sunday");
var result = isPalindrome("mom");
var result = isPalindrome("listen");
var result = isPalindrome("dad");








