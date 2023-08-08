let num1=100;
let num2=num1; //Deep clone
num2=num2-10;
console.log(num1);
console.log(num2);

let str1="Virat";
let str2=str1;  //Deep clone or Deep copy
str2=str2+" Anushka";
console.log(str2);

let hdfcBank={
    bankName:"HDFC Bank",
    location: "Pune",
    accountNo: 778899,
    ifsc: "HDFC003",
    interestRate: "7%"
}

let sbiBank=hdfcBank;  // Shallow Clone
sbiBank.bankName="SBI Bank";
console.log(`hdfcBank reference ${hdfcBank.bankName}`);
console.log(`sbiBank reference ${sbiBank.bankName}`);

let studentElon={
    fullName:"Elon Musk",
    age: 22,
    city: "Pune",
    college: "COEP Pune"
   
}

let studentStew=Object.assign({},studentElon);
studentStew.fullName="Stew Job";
studentStew.marks.science=100;
console.log(`Elon Details : ${studentElon.fullName},${studentElon.marks.science}`);
console.log(`Stew Details : ${studentStew.fullName},${studentStew.marks.science}`);

let studentBill={...studentElon};
studentBill.fullName="Billgates";

console.log(`Elon Details : ${studentElon.fullName}`);
console.log(`BIll Details : ${studentBill.fullName}`);




