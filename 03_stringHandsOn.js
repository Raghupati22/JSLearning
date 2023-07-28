
function stringHandsOn(){
    var str="     Hey you are doing good,keep it up       ";
    console.log("========Step 1================");
    console.log(`Given String is : ${str}`);
    console.log("========Step 2================");
    var result=str.length;
    console.log(`Lenght of string is : ${result}`);
    console.log("========Step 3================");
    var afterTrim=str.trim();
    console.log(`After Trim string is : ${afterTrim} and Lenght is: ${afterTrim.length}`);
    console.log("========Step 4================");
    var aftertrimlen=afterTrim.length;
    var totalExtraSpaces=result-aftertrimlen;
    console.log(`Total number Extra Spaces in String is : ${totalExtraSpaces}`);
    console.log("========Step 5================");
    var firstchar=afterTrim.charAt(0);

    var lastchar=afterTrim.charAt(afterTrim.length-1);
    console.log(`${afterTrim} First Character is: ${firstchar} and Last Character is : ${lastchar}`);
    
    console.log("========Step 6================");
    var totalNumberOfWord=afterTrim.split(' ');
    console.log(`Total Number of Words in String is : ${totalNumberOfWord.length}`);
    console.log("========Step 7================");
    var indexOfGood=afterTrim.indexOf('good');
    console.log(`Index of "good" is : ${indexOfGood}`);
    console.log("========Step 8================");
    var substringSlice=afterTrim.slice(22);
    console.log(`Substring starting from index 22 is : ${substringSlice}`);
    console.log("========Step 9================");
    var endWith=afterTrim.endsWith('up');
    console.log(`Sting End with up character : ${endWith}`);
    console.log("========Step 10================");
    var startWith=afterTrim.startsWith('Hey');
    console.log(`String Start with Hey Character is : ${startWith}`);
    

}
stringHandsOn();