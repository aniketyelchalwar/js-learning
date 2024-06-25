

function spacesCount(str) {
    return str.split(' ').length - 1;
}

let exampleString = "Revision is the mother of success.";

console.log(`Revision is the mother of success. -> Space count is :` , spacesCount(exampleString));


let exampleString2 = "JavaScript is the lanuage of internet world";

console.log(`JavaScript is the lanuage of internet world. -> Space count is :`,  spacesCount(exampleString2) );