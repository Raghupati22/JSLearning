// ++ => Increment Operator
//Pre Fix
//Post Fix
// -- => Decrement Operator
//Pre Fix
//Post Fix

var num=10;
var num2=num++; //num=num+1;
console.log(`Value of num : ${num}`);
console.log(`Value of num2 : ${num2}`);

var num4=10;
var num5=++num4; //num=num+1;
console.log(`Value of num4 : ${num4}`);
console.log(`Value of num5 : ${num5}`);

var num6=5;
var num7=num6--; //num7=num6-1;
console.log(`Value of num6 : ${num6}`);
console.log(`Value of num7 : ${num7}`);
console.log(`==================================`);

// WAP to print numbers from 0 to 10
//start=0
//condition <=10
// increment =1

for (let index = 0; index <=10; index++) {
   console.log(index);    
}
console.log('==============================');
// Log numbers from 5 to 20
for (let index = 5; index <=20; index++) {
    console.log(index);
    
}
console.log('====================================');
// 10 to 1
for (let index = 10; index >= 1; index--) {
    console.log(index);    
}
console.log('================================');
//5 table
for (let index = 5; index <=50; index=index+5) {
  console.log(index);    
}
console.log('========================================');
//7 table in reverse order
// 70 63 56------7

for (let index = 70; index >= 7; index=index-7) {
console.log(index);
}

//First 5 odd numbers
console.log("First 5 Odd numbers");
for (let index = 1; index < 10; index=index+2){
   console.log(index);
}

//First 15 even numbers
console.log("First 15 Even numbers");
var result="";
for (let index = 0; index < 30; index=index+2) {
   result=result.concat(index).concat(" ");
      
}
console.log(result); 
//Infinite Loop
// for (let index = 10; index >0; index++) {
//    console.log(index);
    
// }
console.log('===============While Loop==========');
//Number from 1 to 10
var i=1;
while (i<=10) {
    console.log(i);
    i++;
}

