console.log("===================Step 1====================");
function squareOfWordLength(str){
var length=str.length;
var square=length*length;
console.log(`String is : ${str}`);
console.log(`String length is : ${length}`);
console.log(`String square is : ${square}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");


console.log("===================Step 2====================");

var calculate=function()
{
var str="I am Angular Developer";
var strLength=str.length;
var totalNoOfWords=str.split(' ');
var result1=strLength/totalNoOfWords.length;
console.log(`String is  : ${str}`);
console.log(`String length is  : ${strLength}`);
console.log(`String total word is  : ${totalNoOfWords.length}`);
var result2=strLength*totalNoOfWords.length;
console.log(`String Length divide by total word : ${result1}`);
console.log(`String Length multiply by total word : ${result2}`);
}
calculate();