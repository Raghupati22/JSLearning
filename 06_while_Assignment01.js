console.log('========Print number 5 to 15 by incrementing 1=============');
var index=5;
while (index <=15) {
    console.log(index);
    index++;
}
 


console.log('========Print number 50 to 40 by decrementing 1=============');
var index=50;
while (index >=40) {
    console.log(index);
    index--;
}


console.log('========Print first 15 odd number=============');
var index=1;
while (index <=30) {
    console.log(index);
    index=index+2;
}

console.log('========Print first 10 even number=============');
var index=2;
while (index <=20) {
    console.log(index);
    index=index+2;
}


console.log('========Print table 5 10 15 20 25....50=============');
var index=5;
var result="";
while (index <=50) {
    result=result.concat(index).concat(" ");
    index=index+5;
}
console.log(result); 



console.log('========Print table 10 20 30 40....100=============');
var index=10;
var result="";
while (index <=100) {
    result=result.concat(index).concat(" ");
    index=index+10;
}
console.log(result); 


console.log('========Print table 10 reverse order 100 90 80....10=============');

var index=100;
var result="";
while (index >=10) {
    result=result.concat(index).concat(" ");
    index=index-10;
}
console.log(result); 




