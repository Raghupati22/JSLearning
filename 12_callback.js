


function jennyHomework(callbackStew,callbackElon){
    console.log(`Jenny started assignment`);
    console.log(`Jenny took some time`);
    console.log(`Jenny Completed All her home work`);
    console.log(`Jenny calling back to stew`);
    callbackStew();
    callbackElon();
}

function stewCopyHomework(){
    console.log('===========Stew=============');
    console.log(`Thank you jenny for giving me everything ready`);
    console.log(`Stew started copying`);
    console.log(`Stew copied all howework`);
}



let elonCopyHomework=function(){
    console.log('=========Elon===========');
console.log(`Elon is copying homework`);
console.log(`Elon copied all homework...`);

}

jennyHomework(stewCopyHomework,elonCopyHomework);