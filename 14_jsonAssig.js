console.log(`================Assignment 1 ========================`);
let jsonEmployeeInfo=`{
"name": "Aleix Melon",
"id": "E00245",
"role":["Dev","DBA"],
"age": 23,
"doj":"11-12-2019",
"married": false,
"address":{
    "street": "32, Laham St.",
    "city": "Innsbruck",
    "country": "Austria"
},
"referred-by": "E0012"
}`;

const employee=JSON.parse(jsonEmployeeInfo);
const arrayRole=employee.role;
for (const role of arrayRole) {
    if(role=='Dev')
    {
console.log(`Role: ${role}`);
    }
}

let employeeName=employee.name;
let splitStr=employeeName.split(' ')
let lastname=splitStr[1];
console.log(`Last Name: ${lastname}`);

let employeeDoj=employee.doj;
let dateSplit=employeeDoj.split('-')
console.log(`Year: ${dateSplit[2]}`);