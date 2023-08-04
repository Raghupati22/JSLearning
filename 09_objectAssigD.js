console.log('================Assignment 1==================');

let professor={
    Name:"Raghupati Khot",
    Age: "28",
    college: "IBMR",
    city: "Pune",
    state: "MH",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing"
    },
    certificates:["Hacker Rank Participation","Certificate in IFF course","Certificate in Adv Programming"],
    allDegrees:function(){
        console.log(`Teacher Degrees: ${this.degrees.engineering},${this.degrees.PHD}`);
    }
}

professor.totalExperience="14 years";
console.log(professor);
professor.city="Mumbai";
console.log(professor);
professor.certificates.push("Oracle Certified");
let lastValue=professor.certificates.pop();
console.log(`Last element of Certificate: ${lastValue}`);
