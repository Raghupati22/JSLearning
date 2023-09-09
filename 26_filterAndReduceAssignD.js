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
console.log('=========================Assignment D=======================================');
const wiproEmployee=arrayEmployees.filter((Employee)=>{
    return Employee.emp_company==="Wipro";
    });
    console.log('=======Find all the employees from Wipro company ===============');
console.table(wiproEmployee);

console.log('=======Find all the employees from IT OR HR Department ===============');
const employeeITandHR=arrayEmployees.filter((Employee)=>{
    return Employee.emp_dept==="IT" || Employee.emp_dept==="HR";
    });
    console.table(employeeITandHR);
    console.log('=======Find all the employees whose emp id greater than 50 ===============');
    const employeeId=arrayEmployees.filter((Employee)=>{
        return Employee.emp_id>50;
        });
        console.table(employeeId);  
console.log('=======Find all the employees whose name start with A or V or M ===============');
const employeeName=arrayEmployees.filter((Employee)=>{
    return Employee.emp_name.startsWith("A") || Employee.emp_name.startsWith("V") || Employee.emp_name.startsWith("M");
    });
    console.table(employeeName);  
console.log('=======Find the average salary of the employee for all department ===============');
const salarySum=arrayEmployees.reduce((total,emp)=>{
return total +emp.emp_salary;
},0);
    console.log(`Average salary all depeartment is : ${salarySum/arrayEmployees.length}`);

console.log('=======Find the average salary of the employee for IT department ===============');
const avrageSalITDept=arrayEmployees.filter((Employee)=>{
    return Employee.emp_dept==="IT";
    });
    const salSum=avrageSalITDept.reduce((total,emp)=>{
        return total +emp.emp_salary;
        },0);
   
    console.log(`Average salary of IT Department : ${salSum/avrageSalITDept.length}`);
