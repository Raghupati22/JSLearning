console.log("===================Step 1====================");
var greaterNumber=function(num1,num2){
var result=num1>num2 ? num1 : num2;
console.log(`Greater Number is : ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("===================Step 2====================");
var isEvenOrOddNum=function(num){
    var result=num%2==0 ? "Even" : "Odd";
    console.log(`${num} is ${result}`);
}

isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("===================Step 3====================");
var findEvenOdd=function(str){
    var Wordlength=str.length;
    var result=Wordlength%2==0 ? "EVEN" : "ODD";
    console.log(`${str} length is  ${result}`);
}

findEvenOdd("JavaScript");
findEvenOdd("developer");
findEvenOdd("Google");


