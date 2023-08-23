console.log('===================Step 1=====================');
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((currentValue,index)=>{
    console.log(`Element : ${currentValue}  Index : ${index}`);
})
console.log('===================Step 2=====================');
arrayNumbers.forEach((currentValue)=>{
    if(currentValue>=0)
    {
console.log(`Positive Number : ${currentValue}`);
    }
});
console.log('===================Step 3=====================');
let negativeNum=[];
arrayNumbers.forEach((currentValue)=>{
    if(currentValue<0)
    {
      negativeNum.push(currentValue);
      console.log(`New Array : ${negativeNum}`);
    }
});

console.log('===================Step 4=====================');
arrayNumbers.forEach((currentValue)=>{
    if(currentValue%2==0)
    {
console.log(`Even Number is : ${currentValue}`);
    }
});

let sum=0;
console.log('===================Step 5=====================');
arrayNumbers.forEach((currentValue)=>{
   sum=sum+currentValue;
});
console.log(`Sum of all Element is : ${sum}`);

console.log('===================Step 6=====================');
arrayNumbers.forEach((currentValue,index)=>{
    if(index%2==0)
    {
console.log(`Even Index Value is : ${currentValue}`);
    }
});