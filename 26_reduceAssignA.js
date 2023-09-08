const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];

console.log('Find the sum of all numbers using reduce()');
const totalSum=array_numbers.reduce((runningTotal,element)=>{
return runningTotal+element;
});
console.log(totalSum);

console.log('Find the numbers multiple of 5 and then sum using reduce()');

const multiple5Sum=array_numbers.filter(Numbers=> Numbers%5==0)
.reduce((runningTotal,element)=>runningTotal+element)
console.log(multiple5Sum);
