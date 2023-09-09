const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log("=====Reverse the array============");
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);
console.log("=====use sort method as it is without any custom sorting logic & notice the issue============");
arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log("=====Sort the array in ascending order by custom logic============");
arrayRollNumbers.sort((n1,n2)=>{
    return n1>n2?1:-1; // Custom logic to sort array of numbers in ascending order
    });
console.log(arrayRollNumbers);
console.log("=====Find the Greates number from the array============");
console.log(arrayRollNumbers[arrayRollNumbers.length-1]);
console.log("=====Find the Smallet number from the array============");
console.log(arrayRollNumbers[0]);
console.log("=====Remove duplicate from the array============");
const removeDuplicate = [...new Set(arrayRollNumbers)];
console.log(removeDuplicate);
