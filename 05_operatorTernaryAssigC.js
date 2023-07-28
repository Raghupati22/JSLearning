console.log("================Assignement 2 =====================");
function maleMarriageEligibility(gender,age,boyName)
{
var result= gender=="Male" && age>=21 ? `Hey ${boyName} you are eligible for Marriage` : `${boyName}  you are Not eligible for Marriage`;
console.log(result);
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log("====================================================");
function femaleMarriageEligibility(gender,age,girlName)
{
var result= gender=="Female" && age>=18 ? `Hey ${girlName} you are eligible for Marriage` : `${girlName}  you are Not eligible for Marriage`;
console.log(result);
}

femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");
