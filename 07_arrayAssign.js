const fruit_Seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`1-First element in the array : ${fruit_Seasonal[0]}`);

const frtSeasnl = fruit_Seasonal.length;
console.log((`2-First element in the array : ${fruit_Seasonal[frtSeasnl-1]}`));

fruit_Seasonal.unshift("Papaya");
console.log(`3-Add element at begning: ${fruit_Seasonal}`);

fruit_Seasonal.push("Pineapple");
console.log(`4-Add element at last position : ${fruit_Seasonal}`);