console.log('=============Step 1============');
var sqaure=function(num){
var result=num*num;
console.log(`The Squre of ${num} is : ${result}`);
}
sqaure(5);
sqaure(6);
sqaure(25);
sqaure(100);
sqaure(67.89);
sqaure(59);

console.log('=============Step 2============');
console.log(`The type of function is : ${typeof sqaure}`);
console.log('=============Step 3============');
var areaRectangle=function(length,width)
{
console.log(`Length of Rectangle is : ${length} and Width of Rectangle is ${width}`);
var result=length*width;
console.log(`Area of Rectangle is : ${result}`);
}
areaRectangle(499,917)
console.log('=============Step 4============');
var swap=function(value1,value2)
{
    console.log(`Before Swapping the values are : ${value1} and ${value2}`);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log(`After Swapping the values are : ${value1} and ${value2}`);
    
}
swap('Mahi','Raina');
swap(55,77);
console.log('=============Step 5============');
var  strOpration=function(str){
console.log(`String is : ${str}`);
var totalNumberOfChar=str.length;
console.log(`Total Character in string is : ${totalNumberOfChar}`);
var charAtIndex=str.charAt(6);
console.log(`Character at "6" is : ${charAtIndex}`);
var charAtIndex=str.charAt(11);
console.log(`Character at "11" is : ${charAtIndex}`);
var lastChar=str.charAt(str.length-1);
console.log(`Last character of string is : ${lastChar}`);
var firstChar=str.charAt(0);
console.log(`First character of string  is : ${firstChar}`);
var thirdLastChar=str.charAt(str.length-3);
console.log(`Third last character of string  is : ${thirdLastChar}`);
var words=str.split(" ");
var wordCount=words.length;
var wordSqure=wordCount*wordCount;
console.log(`Total number of words is ${wordCount} and the square of word is : ${wordSqure}`);
}
strOpration('JS is the Most popular language of internet');
