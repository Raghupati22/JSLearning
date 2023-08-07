


class Student {

    constructor(fullName,rollNo,college,emailId,mobile){
this.fullName=fullName;
this.rollNo=rollNo;
this.college=college;
this.emailId=emailId;
this.mobile=mobile;
    }

    show(){
        console.log(`Student Details is Full Name: ${this.fullName} ,Roll Number: ${this.rollNo}
        College Name: ${this.college}, Email Id: ${this.emailId}, Mobile No : ${this.mobile}`);
    }
}

let studentJenny=new Student("Jenny Gates",11,"COEP Pune","abc@gmail.com","9665342920");

let studentStew=new Student("Stew Page",22,"JSPM","stew@gmail.com","9665 3429 20");


let studentElon=new Student("Elon Musk",22,"Stanford","stew@gmail.com","9665 3429 20");

let studentSatya=new Student("Satya Nadella",22,"ABC","satyaw@gmail.com","9665 3429 20");

let studentSundar=new Student("Sundar Pichai",55,"ABC","satyaw@gmail.com","9665 3429 20");

const array=[studentJenny,studentStew,studentElon,studentSatya,studentSundar];
console.log("Traversing array");
for (const student of array) {
    student.show();
 
}