


function College(name,year,city,founderName){
this.name=name;
this.year=year;
this.city=city;
this.founderName=founderName;
}

const coep=new College("COEP Pune",1978,"Pune","Yogesh Muske");
console.log(coep);

const mit=new College("MIT",1999,"Mumbai","Shivaji Narayan");
console.log(mit);

const shivaji=new College("Shivaji College",2001,"Karad","Shivaji Kadam");
console.log(shivaji);

College.prototype.country="Bharat";
console.log(`MIT Country : ${mit.country}`);
console.log(`COEP Country : ${coep.country}`);
console.log(`Shivaji Country : ${shivaji.country}`);