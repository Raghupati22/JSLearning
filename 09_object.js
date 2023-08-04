

let personGK={
     empId: 2233,
     state : "MH",
     designation : "Tech Lead",
     city: "Pune",
     isMarried: true,
     empId: 2233,
     show:function(){
          console.log(`Inside show function`);
     }
}
console.log(personGK);

console.log(typeof personGK);

console.log(`Emp Id : ${personGK.empId}`); //Dot notation
console.log(`Emp city : ${personGK["city"]}`);//bracket Notation

let isMarried= personGK.isMarried;
console.log(isMarried);


personGK.city="Mumbai";
console.log(personGK);

delete personGK.designation;
console.log(personGK);

personGK.adharNumber=1232340923;
console.log(personGK);
personGK.show();

let array=[];

let bank={
bankName:"SBI Bank",
accountNumber: 123443434,
ifsc: "SBIN000567",
address:{
     street:"Wakad Main Road",
     pin: 411057,
     landmark: "Near Petrol Pump",
     telePhone: "020-446789",
     city: "Pune",
     state: "MH",
     country: "India",
     getAddress: function(){
       console.log(`Bank Address: ${this.street} ,${this.landmark} ,${this.pin} ,${this.telePhone} ,${this.city} ,${this.state} ,${this.country}`);
     }
},
empNames: ["Jenny","Elon","Warren","Stew"]


}


console.log(bank.address.city);

// delete bank.accountNumber.telePhone;

bank.address.country="Maharashtra";

// bank.empNames.push("Bill");

bank.empNames.pop();
bank.empNames.unshift("Mark")
console.table(bank);
bank.gadgets=new Map();
//bank.gadgets.set("");

bank.getAddress;

bank.totalExp="14 years";
bank.empNames.push("Anil");

let sbiBank={
     bankName:"SBI Bank"
}

let student={
     rollNumber: 2233,
     state : "MH",
     city: "Pune",
     college: "COEP Pune"
    
}

let keysStudent=Object.keys(student);
console.log(keysStudent);
let valuesStudent=Object.values(student);
console.log(valuesStudent);
console.log('=============Traversing an object==================');
for (const key in student) {
     if (Object.hasOwnProperty.call(student, key)) {
          const element = student[key];
          console.log(`Key: ${key}, value: ${element}`);
     }
}



let isAvailable="college" in student;

