const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,10];
console.log('============step 1=====================');
const arrayAdd10value=arrayNumbers.map((currentValue)=> {
    return currentValue+10;
    });
    console.log(arrayAdd10value);

    console.log('============step 2=====================');
    const arrayCube=arrayNumbers.map((currentValue)=> {
        return currentValue*currentValue*currentValue;
        });
        console.log(arrayCube);

        console.log('============step 3=====================');
    const arrayAddIndexValue=arrayNumbers.map((currentValue,index)=> {
        return currentValue+index;
        });
        console.log(arrayAddIndexValue);


