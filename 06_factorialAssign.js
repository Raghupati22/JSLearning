//Assignment ---WAP to find the factorial of numbers: 5,9,11,7
console.log('==============Assignment 1========================');
function calculateFactorial(num)
{
    let result=1;
for (let index = 1; index <=num; index++) {
   result=result*index;
    
}
console.log(`Factorial of ${num} is : ${result}`);
}

calculateFactorial(5);
calculateFactorial(9);
calculateFactorial(11);
calculateFactorial(7);