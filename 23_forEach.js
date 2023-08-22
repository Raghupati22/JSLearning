
const array=[10,20,5,40,30,15];

array.forEach((currentValue,index,array)=>{
    console.log(currentValue,index,array);
})
console.log(`Find the even number using forEach`);
array.forEach((currentValue)=>{
    if(currentValue%2==0)
    {
console.log(currentValue);
    }
});

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

const arrayStudent=[studentJenny,studentStew,studentElon,studentSatya,studentSundar];
arrayStudent.forEach((student)=>{
    console.log(student.fullName,student.emailId);
})
console.log('======Set traversing using forEach()====');
const setOfNames=new Set();
setOfNames.add('Jenny');
setOfNames.add('Dhoni');
setOfNames.add('Virat');
setOfNames.add('Sweety');
setOfNames.add('Rajiv');

setOfNames.forEach((frdName)=>{
console.log(frdName);
});

console.log('======Map traversing using forEach()====');

let map=new Map();
map.set("rollNo",11);
map.set("height","6ft");
map.set("name","GK");
map.set("state","MH");
map.set("isMarried",true);
map.set("HaveKid",true);
map.set("skills",["Angular","React","Java","Docker","KB","CICD"]);
map.forEach((value,key)=>{
console.log(`Value : ${value},Key :${key}`);
})