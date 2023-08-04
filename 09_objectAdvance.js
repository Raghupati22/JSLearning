


const student={
    rollNumber: 2233,
    state : "MH",
    city: "Pune",
    college: "COEP Pune"   
}

student.city="Mumbai";
console.log(student);

let person={
    name:"abc",
    adhar:"xxxxx"

}

//student=person; //not allowed


const employee={
    empNo: 2233,
    state : "MH",
    city: "Pune",
    company: "Infosys",
    designation: "Software Engineer"  
}
Object.freeze(employee);
employee.empNo=2345;
employee.company="TCS";
console.log(employee);