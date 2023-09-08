const array=[2,4,7,9,11];
let sum=0;
for (const element of array) {
 sum=sum+element;   
}
console.log(sum);
console.log('Finding sum using reduce()');
const totalSum=array.reduce((runningTotal,element)=>{
return runningTotal+element;
});
console.log(totalSum);

console.log('Finding multiplication using reduce()');
const totalMul=array.reduce((runningMuplication,element)=>{
return runningMuplication* element;
});
console.log(totalMul);