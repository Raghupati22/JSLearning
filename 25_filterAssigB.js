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


let studentElon=new Student("Elon Musk",33,"Stanford","stew@gmail.com","9665 3429 20");

let studentSatya=new Student("Satya Nadella",44,"ABC","satyaw@gmail.com","9665 3429 20");

let studentSundar=new Student("Sundar Pichai",55,"ABC","satyaw@gmail.com","9665 3429 20");

const arrayOfStudent=[studentJenny,studentStew,studentElon,studentSatya,studentSundar]
const newStudentList=arrayOfStudent.filter((Student)=>{
return Student.emailId.length>13;
});
console.table(newStudentList);

class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}

const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

const tcsEmployee=arrayEmployees.filter((Employee)=>{
    return Employee.emp_company=="TCS";
    });
    console.table(tcsEmployee);

    const avrageSalWipro=arrayEmployees.filter((Employee)=>{
        return Employee.emp_salary>50000 && Employee.emp_company=="Wipro";
        });
        console.table(avrageSalWipro);

        const avrageSalWiproOrInfy=arrayEmployees.filter((Employee)=>{
            return Employee.emp_salary>50000 && Employee.emp_company=="Wipro" || Employee.emp_company=="Infy";
            });
            console.table(avrageSalWiproOrInfy);

