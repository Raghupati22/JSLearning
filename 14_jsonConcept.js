

let addressStr=`{
    "flatNo": 307,
    "building": "B",
    "street": "Data Mandir Road",
    "location": "Wakad",
    "pin": 411057,
    "owners":["Lalu Devant","Shalu Devant"]
  }`;
  console.log(`type of addressStr==> ${typeof addressStr}`);
const address=JSON.parse(addressStr); //Convert from JSON format to objet
console.log(`address type of==> ${typeof address}`);
console.log(address);
console.log(address.location);
console.log(address.owners);
console.log('=========================================');
const student={
    rollNo: 123,
    fullName: "Jenny Atand",
    marks: "98%",
    awards:{
        hsc:"School tooper",
        ssc:"Division Topper",
        graduation: "Gold Medalist"
    }
}

let studentSir=JSON.stringify(student);
console.log(studentSir);