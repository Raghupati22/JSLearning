const arrayNames=["Stew","Jenny","Bill","Larry","Vivek"];

arrayNames.sort(); // Sorting in ascending order
console.log(arrayNames);
arrayNames.reverse(); //Sorting in descending order
console.log(arrayNames);

const arrayNums=[34,3,5,11,21,9,42];
arrayNums.sort((n1,n2)=>{
return n1>n2?1:-1; // Custom logic to sort array of numbers in ascending order
});
console.log(arrayNums);
//arrayNums.reverse();
//console.log(arrayNums);