function sqaureOfWordLength(argOne , argTwo , argThree){

   var result = argOne.length;
   console.log(`Length of sqaure "JavaScript": ${result * result}`);

   var result = argTwo.length;
   console.log(`Length of sqaure "Google Chrome": ${result * result}`);

   var result = argThree.length;
   console.log(`Length of sqaure "Developer Smart": ${result * result}`);
     
}
sqaureOfWordLength("JavaScript","Google Chrome","Developer Smart");



console.log(`____________SecondeAssign_______________`);



function show(){

    var str = "I am Angular Developer";
    console.log(`Given String is : ${str}`);
    var len = str.length;
    
    var words = str.split(" ");
    var wordsLen = words.length;
    
    
    var result = len / wordsLen;
    console.log(`String length and divided by total number words is: ${result}`);

    
    
    var result = wordsLen * len;
    console.log(`String length and multiple by total number words is: ${result}`);

}
show();