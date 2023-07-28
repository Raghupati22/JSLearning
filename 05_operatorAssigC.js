console.log("================Assignement 1 =====================");

var tcsInterviewEligible=function(gradScore,hscScore,sscScore,candidateName){
var result=gradScore>=70 || hscScore>=80 || sscScore>=90 ? `Congrates ${candidateName} you are eligible for TSC interview` : `Sorry ${candidateName} , Unfortunately you are not eligible for interview`;
console.log(result);
}

tcsInterviewEligible(80,86,90,"Mahesh");
tcsInterviewEligible(70,65,55,"Shubham");
tcsInterviewEligible(60,79,88,"Deepak");

var pin="202";
var result=+pin;

