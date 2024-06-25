console.log(`______________Assign of constructor Function______________`);

function Bank(bankName, location, ifscCode, branchName){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchName = branchName;

}

const yesBank = new Bank("yesBank" , "Gandhi Chowk" , 14523 , "Chandrapur" );
const sbiBank = new Bank("sbiBank" , "Kasturbha Road" , 4523 , "Chandrapur");
const mahBank = new Bank("mahBank" , "Girnar Chowk" , 8523 , "Chandrapur");
const axisBank = new Bank("axisBank" , "Baner" , 75509 , "Pune");



console.log(`Details of Yes Bank >>`);
console.log( ` Bank Name: ${yesBank.bankName}, \n Location: ${yesBank.location}, \n IFSC Code: ${yesBank.ifscCode}, \n Branch Name: ${yesBank.branchName}\n`);

console.log(`Details of SBI Bank >>`);
console.log(` Bank Name: ${sbiBank.bankName}, \n Location: ${sbiBank.location}, \n IFSC Code: ${sbiBank.ifscCode}, \n Branch Name ${sbiBank.branchName}\n`);

console.log(`Details of Maharashtra Bank >>`);
console.log(` Bank Name: ${mahBank.bankName}, \n Location: ${mahBank.location}, \n IFSC Code ${mahBank.ifscCode}, \n Branch Name ${mahBank.branchName}\n`);

console.log(`Details of Axis Bank >>`);
console.log(` Bank Name: ${axisBank.bankName},\n Location: ${axisBank.location},\n IFSC Code: ${axisBank.ifscCode}, \n Branch Name: ${axisBank.branchName}\n`);


// add prototype


console.log(`___________Bank Timing___________`);
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`SBI Bank Open time: ${sbiBank.openTime}, and close time:${sbiBank.closeTime}`);

console.log(`Axis Bank Open time: ${axisBank.openTime}, and close time:${axisBank.closeTime}\n`);


console.log(`___________Bank Modified Details___________`);
Bank.prototype.branchCode = "659784";
console.log(`Yes Bank details >> Bank Name: ${yesBank.bankName}, Branch Code: ${yesBank.branchCode}, Open Time: ${yesBank.openTime}`);


