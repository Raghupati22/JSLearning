
let add=function (){
    console.log(12+12);
}
add();

let arrowFun=()=>{
  return 13+13;
}
let value=arrowFun();
console.log(value);

let multiply=(num1,num2,num3=1)=>{
console.log(num1*num2*num3);
}
multiply(5,5);

const arrayEmployees=[emp_anil,emp_radha]