console.log('======================Step 1===========================');
let arrowFun=()=>{
    console.log("Good Morning, Today is Tuesday");
  }
  arrowFun();
  console.log('======================Step 2===========================');
  let multiply=(num1,num2,num3=1)=>{
    console.log(`Multiplication is : ${num1*num2*num3}`);
    }
    multiply(5,5,2);
    multiply(10,4)
    console.log('======================Step 3===========================');
    let addition=(num1,num2,num3,num4,num5)=>{
        console.log(`Addition is : ${num1+num2+num3+num4+num5}`);
        }
        addition(100,100,200,349,756);
addition("I am"," learning"," ES6"," features"," In depth");        

