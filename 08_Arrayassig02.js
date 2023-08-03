console.log('=============== Assignment 2 ==========================');
let arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Total Element available is : ${arrayNumbers.length}`);
console.log(`First elment of Array is : ${arrayNumbers[0]}`);
console.log(`Last elment of Array is : ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`Third Last elment of Array is : ${arrayNumbers[arrayNumbers.length-3]}`);
console.log('===========Even Numbers===============');
for (let index = 0; index <arrayNumbers.length; index++) {
    let evenNumber=arrayNumbers[index];
   if(evenNumber%2==0)
   {
    const element = arrayNumbers[index];
    console.log(element);
   }
    
}
console.log('===========Odd Numbers===============');
for (let index = 0; index <arrayNumbers.length; index++) {
    let evenNumber=arrayNumbers[index];
   if(evenNumber%2!=0)
   {
    const element = arrayNumbers[index];
    console.log(element);
   }
    
}

console.log('===========Even Position Numbers Sum===============');
let sum=0;
for (let index = 0; index <arrayNumbers.length; index++) {
    
   if(index%2==0)
   {
    const element = arrayNumbers[index];
    sum=sum+element;
   }
    
}
console.log(`Even positions numbers sum is : ${sum}`);


console.log('===========Odd Position Numbers Sum===============');
let sumOdd=0;
for (let index = 0; index <arrayNumbers.length; index++) {
    
   if(index%2!=0)
   {
    const element = arrayNumbers[index];
    sumOdd=sumOdd+element;
   }
    
}
console.log(`Odd positions numbers sum is : ${sumOdd}`);

console.log('===========Sum of all element===============');
let sumAll=0;
for (let index = 0; index <arrayNumbers.length; index++) {
    
   
    const element = arrayNumbers[index];
    sumAll=sumAll+element;

    
}
console.log(`Sum of all element is  : ${sumAll}`);

console.log('===========Multiple of 5 element===============');
for (let index = 0; index <arrayNumbers.length; index++) {
    let evenNumber=arrayNumbers[index];
   if(evenNumber%5==0)
   {
    const element = arrayNumbers[index];
    console.log(element);
   }
    
}

let is115Available=arrayNumbers.includes(115);
console.log(`Is 115 available : ${is115Available}`);

let is23Available=arrayNumbers.includes(23);
console.log(`Is 23 available : ${is23Available}`);


arrayNumbers.splice(3,0,55,66);
console.log(`Array Element is : ${arrayNumbers}`);

arrayNumbers.splice(4,3);
console.log(`Array Element is : ${arrayNumbers}`);

   
