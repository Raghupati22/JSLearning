function add(num1,num2,...num){
//Addition 11
let sum=0;
for (let index = 0; index < num.length; index++) {
    let element = num[index];
    sum=sum+element;
}
let result=num1+num2+sum;
console.log(`Sum of num1: ${num1} , num2: ${num2} and rest: ${num} is = ${result}`);
}
add(5,6);
add(9,5,6);
add(78,90,51,68);
add(89,90,45,78,90,51,68);