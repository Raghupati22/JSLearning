//numeric string used with + gives string type
console.log('================Implicit Conversion To String ===================');
var result='3'+2;
console.log(`Result : ${result}`); //"32"
console.log(`Why result is ${result} because their is implicit conversion from number value 2 to string`);

var result='3'+true;
console.log(`Result : ${result}`); //"3true"
console.log(`Why result is ${result} because their is implicit conversion from boolean value true to string`);

var result='3'+undefined;
console.log(`Result : ${result}`); //"3undefined"
console.log(`Why result is ${result} because their is implicit conversion from undefined value to string`);

var result='3'+null;
console.log(`Result : ${result}`);//"3null"
console.log(`Why result is ${result} because their is implicit conversion from null value to string`);

console.log('================Implicit Boolean Conversion To Number ===================');

var result='4'-true;
console.log(`Result : ${result}`);//"3"
console.log(`Why result is ${result} because their is implicit conversion from boolean value true to number`);

var result=4 + true;
console.log(`Result : ${result}`);//"5"
console.log(`Why result is ${result} because their is implicit conversion from boolean value true to number`);

var result=4 + false;
console.log(`Result : ${result}`);//"4"
console.log(`Why result is ${result} because their is implicit conversion from boolean value false to number`);


console.log('================Implicit String Conversion To Number ===================');

var result='4'-'2';
console.log(`Result : ${result}`); //"2"
console.log(`Why result is ${result} because their is implicit conversion from string value 2 and 4 to number`);

var result='4'-2;
console.log(`Result : ${result}`); //"2"
console.log(`Why result is ${result} because their is implicit conversion from string value 4 to number`);

var result='4'* 2;
console.log(`Result : ${result}`); //"8"
console.log(`Why result is ${result} because their is implicit conversion from string value 4 to number`);

var result='4'/ 2;
console.log(`Result : ${result}`);//"2"
console.log(`Why result is ${result} because their is implicit conversion from string value 4 to number`);