console.log('================== Assignment 2 =====================');

function reverseString(str){
    let reverseStr="";
    for (let index = str.length-1; index >=0; index--) {
      const char=str.charAt(index);
      if(char!=' ')
      {
        reverseStr=reverseStr.concat(char);
      }
     
    }
    console.log(`Reverse string is : ${reverseStr}`);
}

reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");
