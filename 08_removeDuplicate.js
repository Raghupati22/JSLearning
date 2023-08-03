console.log('=================Assignment : Removing duplicate value from array===================');
let array=[4,5,4,5,8,5,7,8,9,7,8];

let uniqueArrays = [];

for (const index of array) {
   
    if(uniqueArrays.indexOf(index)== -1)
    {
        uniqueArrays.push(index)
    }
}
console.log(uniqueArrays);