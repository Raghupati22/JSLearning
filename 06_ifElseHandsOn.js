console.log("==========================Assignment 1=======================");
console.log("============Step 1=============");

function evenOrOdd(num)
{
    if (num%2==0) {
        console.log(`${num} is Even NUmber`);
    } else {
        console.log(`${num} is Odd Number`);
    }
}

evenOrOdd(45);
evenOrOdd(70);
evenOrOdd(67);
evenOrOdd(98);

console.log("============Step 2=============");
function checkLength(str)
{
    var strLength=str.length;
    if(strLength>10)
    {
        console.log(`${str} string contain more than 10 character`);
    }
    else
    {
        console.log(`${str} string contain not more than 10 character`);
    }
}

checkLength("JavaScript - ES6");
checkLength("Python");


console.log("============Step 3=============");

function startWithCheck(str)
{
    var checkStr=str.startsWith('Java');
    if(checkStr==true)
    {
        console.log(`${str} string starts with "Java"`);
    }
    else
    {
        console.log(`${str} string  not starts with "Java"`); 
    }
}

startWithCheck("JavaScript Language");
startWithCheck("C# Program");

