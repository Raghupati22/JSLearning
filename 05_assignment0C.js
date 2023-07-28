console.log('======================================================');

var result= 0=='';
console.log(`Result : ${result}`); //"2"
console.log(`Why result is ${result} because their is == comparison operator only compare value and blank value will be converted into number`);

var result= 0=='0';
console.log(`Result : ${result}`); //"2"
console.log(`Why result is ${result} because their is == comparison operator only compare value and '0' value will be converted into number`);

var result= 0==false;
console.log(`Result : ${result}`); //"2"
console.log(`Why result is ${result} because their is == comparison operator only compare value and false value will be converted into number`);

var result= null==undefined;
console.log(`Result : ${result}`); //"2"
console.log(`Why result is ${result} because their is == comparison operator only compare value and undefined value will be converted into null`);

var result= 1==[1];
console.log(`Result : ${result}`); //"2"
console.log(`Why result is ${result} because their is == comparison operator only compare value and [1] value will be converted into number`);

var result= 1==true;
console.log(`Result : ${result}`); //"2"
console.log(`Why result is ${result} because their is == comparison operator only compare value and true value will be converted into number`);

var result= 1=='1';
console.log(`Result : ${result}`); //"2"
console.log(`Why result is ${result} because their is == comparison operator only compare value and '1' value will be converted into number`);