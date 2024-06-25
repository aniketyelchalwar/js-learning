console.log(`"  Hey you are doing good, Keep it up   "`);

function stringHandsOn(){

    console.log(`1."  Hey you are doing good, Keep it up   "`);

    var str = "  Hey you are doing good, Keep it up   ";
    var calLen = str.length;
    console.log(`2. Length of string is :`, calLen);
    
    var strOne = str.trim();
    console.log(`3. Remove the leading and trailling extra spaces : ${strOne.length}`);

    var extSpc = calLen-strOne;
    console.log(`4. Extra number of spaces removed : `, extSpc.length);


    console.log(`5. First and Last Character:  ${strOne.charAt(0)} , ${strOne.charAt(33)} `);

    var words = strOne.split(" ");
    console.log(`6. Count the total word : ${words.length} `);

    var result = strOne.includes("up");
    console.log(`9. Check is string ends with "up" : ${result}`);

    var result = strOne.includes("Hey");
    console.log(`10. Check is string start with "Hey" : ${result}`);
}
stringHandsOn();