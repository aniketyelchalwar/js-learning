const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];


arrayRollNumbers.reverse();

console.log(`1.Reverse array : ${arrayRollNumbers}`);

arrayRollNumbers.sort();
console.log(`2.Use sor() method without any custom sorting logic : ${arrayRollNumbers} 
  , after sorting it will give incoorect result.`);

  arrayRollNumbers.sort((n1 , n2)=> {

    return n1>n2 ? 1 : -1;

  });

  console.log(`3.sort array in ascending order : ${arrayRollNumbers}`);


  const arr = arrayRollNumbers.length-1;
  console.log(`4.Greatest number from the array : ${arrayRollNumbers[arr]}`);


  console.log(`5.Smallest number from the array : ${arrayRollNumbers[0]}`);

//   const arrDup = arrayRollNumbers.filter((item,index)=> {
//     arrayRollNumbers.indexOf(item) === index;
//   });
//   console.log(`6.Remove duplicate from array : ${arrDup}`);