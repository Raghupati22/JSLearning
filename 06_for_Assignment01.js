console.log('========Print number 5 to 15 by incrementing 1=============');
for (let index = 5; index <=15; index++){
 console.log(index);
}

console.log('========Print number 50 to 40 by decrementing 1=============');
for (let index = 50; index >=40; index--){
 console.log(index);
}

console.log('========Print first 15 odd number=============');
for (let index = 1; index <=30; index=index+2){
 console.log(index);
}

console.log('========Print first 10 even number=============');
for (let index = 2; index <=20; index=index+2){
 console.log(index);
}

console.log('========Print table 5 10 15 20 25....50=============');
var result="";
for (let index = 5; index <=50; index=index+5){
    result=result.concat(index).concat(" ");
}
console.log(result); 

console.log('========Print table 10 20 30 40....100=============');
var result="";
for (let index =10 ; index <=100; index=index+10){
    result=result.concat(index).concat(" ");
}
console.log(result); 

console.log('========Print table 10 reverse order 100 90 80....10=============');
var result="";
for (let index =100 ; index >=10; index=index-10){
    result=result.concat(index).concat(" ");
}
console.log(result); 



