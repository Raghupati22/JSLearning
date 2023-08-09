console.log('===========Assignment 3 =================================');
//shallow clone- assignment operator

const arrayNums=[20,3,4,56,90,400,49];
let newArray=arrayNums;
newArray.push(55);
newArray.push(66);
console.log(`Original Array is : ${arrayNums}`);
console.log(`Cloned Array is : ${newArray}`);

//deep clone for spread , assignment operator
console.log('========================================');
let arrayDeepClone=[...arrayNums];
arrayNums.push(10);
arrayNums.push(25);
console.log(`Original Array is : ${arrayNums}`);
console.log(`Cloned Array is : ${arrayDeepClone}`);
//Merge 
const arrayEven=[2,30,14,8];
const newArr=[...arrayNums,...arrayEven];

console.log(`Merge arrays is :${newArr}`);
//Object -> object ->object
//showAddress function

//deep clone using JSON.stringfy()
const employee_info={
    emp_id:27,
    emp_name: "John Doe",
    salary:{
        july_month: "40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pakli, 431202"
        },
        city: "Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88", "1800- 4567 32","+91 -9096567877"]
    }


console.log(`Address : ${employee_info.address.locality.colony},${employee_info.address.locality.street}, ${employee_info.address.city},${employee_info.address.state} and ${employee_info.address.country}`);
console.log(`Mobile numbers : ${employee_info.mobiles}`);


let employee=JSON.parse(JSON.stringify(employee_info));

employee.salary.july_month="80,0000INR";
employee_info.address.country="United Kingdom";
console.log('=============================================');
console.log('Original object');
console.log(`Emp Id: ${employee_info.emp_id}`);
console.log(`Emp name: ${employee_info.emp_name}`);
console.log(`Salary: ${employee_info.salary.july_month},${employee_info.salary.aug_month},${employee_info.salary.jun_month}`);
console.log(`Emp Id: ${employee_info.address.locality.colony},${employee_info.address.locality.street}, ${employee_info.address.city},${employee_info.address.state},${employee_info.address.country}`);
console.log(`Emp Id: ${employee_info.mobiles}`);
console.log('=============================================');
console.log('Clone object');
console.log(`Emp Id: ${employee.emp_id}`);
console.log(`Emp name: ${employee.emp_name}`);
console.log(`Salary: ${employee.salary.july_month},${employee.salary.aug_month},${employee.salary.jun_month}`);
console.log(`Emp Id: ${employee.address.locality.colony},${employee.address.locality.street}, ${employee.address.city},${employee.address.state},${employee.address.country}`);
console.log(`Emp Id: ${employee.mobiles}`);