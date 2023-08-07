console.log('==============Assignment 1 =================================');
class Vehicle{
    constructor(companyName,color,typeOfVehicle,model,fuelCapcity){
this.companyName=companyName;
this.color=color;
this.typeOfVehicle=typeOfVehicle;
this.model=model;
this.fuelCapcity=fuelCapcity;
    }
}

let splendar2Wheeler=new Vehicle("Hero","Black","2 Wheeler","Splendar","5 Ltr");

let pulsar2Wheeler=new Vehicle("Bajaj","Black","2 Wheeler","Pulsar","5 Ltr");

let creata4Wheeler=new Vehicle("Hyundai","White","4 Wheeler","Creta","50 Ltr");

let nexon4Wheeler=new Vehicle("Tata","Black","4 Wheeler","Nexon","44 Ltr");

let swift4Wheeler=new Vehicle("Maruti","White","4 Wheeler","Swift Dzire","40 Ltr");

const array=[splendar2Wheeler,pulsar2Wheeler,creata4Wheeler,nexon4Wheeler,swift4Wheeler];

console.log("Traversing array");
for (const vehicle of array) {
    console.log(`Vehicle Details is Company Name: ${vehicle.companyName} ,Color: ${vehicle.color},
    Type of vehicle: ${vehicle.typeOfVehicle}, Model: ${vehicle.model}, Fuel Capacity : ${vehicle.fuelCapcity}`);
 
}

console.log('===========================================================================');

class College{
    constructor(collegeName,location,city,district){
this.collegeName=collegeName;
this.location=location;
this.city=city;
this.district=district;
    }

    display(){
        console.log(`College details is College Name : ${this.collegeName}, Location : ${this.location}, City : ${this.city},
         District : ${this.district}`);
    }

}


let mitCollege=new College("MIT","Banner","Pune","Pune")

let ibmrCollege=new College("IBMR","Chinchwad","Pune","Pune")

let coepCollege=new College("COEP","Shivaji Nagar","Pune","Pune")

let jspmCollege=new College("JSPM","Tatavade","Pune","Pune")

const arrayCollege=[mitCollege,ibmrCollege,coepCollege,jspmCollege];
console.log("Traversing array");
for (const college of arrayCollege) {
    college.display();
 
}

console.log('===========================================================================');


function traverseObject(collegeObj){
for (const key in collegeObj) {
    if (collegeObj.hasOwnProperty.call(collegeObj, key)) {
        const element = collegeObj[key];
        console.log(`Object key : ${key} and Value is : ${element}`);
    }
}
}
traverseObject(mitCollege);
traverseObject(ibmrCollege);
traverseObject(coepCollege);
traverseObject(jspmCollege);