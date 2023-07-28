function display1()
{
    console.log("Hello Welcome Function 1 with No Argument");
}
function display2()
{
    console.log("Hello Welcome Function 2 with No Argument");
}
display1();
display2();
console.log("===============================================");

function personalDetails (firstName,lastName,collegeName)
{
    console.log("First Name : ",firstName, "Last Name : ",lastName ,"College Name : ",collegeName);

}
personalDetails("Raghupati","Khot","IBMR Pune");

console.log("===============================================");

function swapValues(arg1,arg2)
{
    console.log('Before swap arg1 value:',arg1,"and arg2 value :", arg2);
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log('After swap arg1 value:',arg1,"and arg2 value :", arg2);

}
swapValues("Virat", "Anushka");
swapValues(1000,2000);

console.log("===============================================");

function addThreeValues(arg1,arg2,arg3)
{
    console.log('Values are: '+arg1, arg2, arg3);
    var result=arg1+arg2+arg3;
    console.log("Addition is: "+result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello"," Good"," Morning");

console.log("===============================================");

function bankDetails(bankName,accountNum,location,pinCode)
{
    console.log("Bank Name: ",bankName," Account Number : ",accountNum , " Location : ",location, " PIN Code: ", pinCode);

}
bankDetails("CITI Bank", 3456782345, "Pune",431202);
bankDetails("Axis Bank", 7856782345, "Mumbai",441202);
bankDetails("HDFC Bank", 8956782345, "Pune",631202,"Open");



