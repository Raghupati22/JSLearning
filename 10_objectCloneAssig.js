console.log("==================Assignment 1 =============================");
let personalDetails={
    fullName:"Raghupati Khot",
    age: 22,
    city: "Pune",
    college: "COEP Pune",
  
}

let collegeDetails={
    collegeName:"COEP",
    city: "Pune",
    stream: "Enginnering",
    Capacity: 240
}

let mergeObject=Object.assign({},personalDetails,collegeDetails);
console.table(`Personal and College Details is : ${mergeObject}`);

let array=["Santosh","Prashant","Prakash","Shubham"];
Object.freeze(array);
for (const names of array) {
    console.log(`Friend Name :${names}`);
}

let company="Codemind Technology";

let strWordArray=company.split(' ');
let arrayvalue=strWordArray[1];
let str=arrayvalue.split("");
let reverseArray=str.reverse();
let joinArray=reverseArray.join("");

console.log(`Reverse string is : ${joinArray}`);
