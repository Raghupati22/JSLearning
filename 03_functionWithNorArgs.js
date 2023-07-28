//Function with no argument and no return value
function show(){
    console.log('My name is Raghupati');
    console.log('I am Technical Lead');
    console.log('My tech skill is -Java +Angular + React + DevOps +');
}
show(); // Function Invocation

// function with argument and no return value
function checkType(value){
 console.log('Value is ',value);
 console.log('Type is: ', typeof value);
 console.log('=========================');
}
checkType(100);
checkType("GK");
checkType(true);
checkType(undefined);
checkType(null);
checkType();

function addition(arg1,arg2,arg3){
console.log('Values are: '+arg1, arg2, arg3);
var result=arg1+arg2+arg3;
return result;
}
var res=addition(10,23,456);
console.log('Result is ',res);
var res=addition(-56,239,677);
console.log('Result is ',res);
var res=addition('GK','Pune',88);
console.log('Result is ',res);

function display(){
    return "Learning JS"
}
var resDisplay=display();
console.log(resDisplay);

function add(arg1,arg2){
console.log(arg1+arg2)
}
add(2,3,4);