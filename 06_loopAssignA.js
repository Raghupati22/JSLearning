console.log('======================Assignment 1===================');

function vowelCount(str){
    let count=0;
    let index=0;
    while (index < str.length) {
        let char=str.charAt(index)
        if (char=='a' || char=='e'|| char=='i' || char=='o' || char=='u'
        ||char=='A' || char=='E'|| char=='I' || char=='O' || char=='U' ) {
           
            count=count+1;
        }
        index++;
    }
console.log(`Total number of vowels is : ${count}`);
    }

    vowelCount("I am very good IT Developer");

    console.log('===============================================');

    function sumOfCube() {
        let sum=0;
        for (let index = 1; index <=5; index++) {
           
            sum=sum+(index*index*index)
        }
        console.log(`Sum of cube 1 to 5 numbers is : ${sum}`);
    }
    sumOfCube();
    console.log('===================================================');

    function oddPositionedChars(str){
        let oddStr="";
        for (let index = 0; index < str.length; index++) {
           const char=str.charAt(index);
            if (index %2!=0 && char!=' ') {
                oddStr=oddStr+char;
            }

        }
        console.log(`Odd positioned chars is: ${oddStr}`);
    }

    oddPositionedChars("Hard work always pays back");
    oddPositionedChars("Soon I will be Angular IT Champ");
