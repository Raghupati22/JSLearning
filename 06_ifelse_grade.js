console.log("==========================Assignment 2=======================");


var voteEligibe=function(age)
{
    var ageValue= +age;
    if (age<=0 || isNaN(ageValue) || age>130) {
        console.log(`You are age ${age} is invalid`);
    
    } else {
            //if block to handle all invalid scearios
        if (age>=18) {
            console.log(`${age} You are eligible for vote`);
          } else {
            console.log(`${age} You are not eligible for vote`);
          }
    }
}
voteEligibe(45);
voteEligibe(17);
voteEligibe(8);
voteEligibe(20);
voteEligibe(-10);
voteEligibe(200);
voteEligibe(0);
voteEligibe(undefined);
voteEligibe(null);



