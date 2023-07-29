console.log("====================Assignment 2 =============================");
function marriageEligibilty(gender,age) {
    if (gender=="Male" && age>=21) {
        console.log(`Age : ${age} - He is eligible for Marriage.`);
    }
    else  if (gender=="Male" && age<21) {
        console.log(`Age : ${age} - He is Not eligible for Marriage.`);
    }
    else if(gender=="Female" && age>=18) 
    {
        console.log(`Age : ${age} - She is eligible for Marriage.`);
    }
    else if(gender=="Female" && age<18) 
    {
        console.log(`Age : ${age} - She is not eligible for Marriage.`);
    }
    else
    {
        console.log(`Gender : ${gender} - Please provide valid data.`);
    }
}

marriageEligibilty("Male",17);
marriageEligibilty("Male",25);
marriageEligibilty("Female",28);
marriageEligibilty("Female",16);
marriageEligibilty("Other",35);
marriageEligibilty("Other",41);