const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log('============step 1=====================');
const greaterthan50=arrayNumbers.filter((currentValue)=>{
    return currentValue>50;
    });
    console.log(greaterthan50);

    console.log('============step 2=====================');
    const evenNum=arrayNumbers.filter((currentValue)=>{
        return currentValue%2==0;
        });
        console.log(evenNum);

        console.log('============step 3=====================');
        const oddNum=arrayNumbers.filter((currentValue)=>{
            return currentValue%2!=0;
            });
            console.log(oddNum);

            console.log('============step 4=====================');
            const multipleOf5=arrayNumbers.filter((currentValue)=>{
                return currentValue%5==0;
                });
                console.log(multipleOf5);

                console.log('============step 5=====================');
                const between20to50=arrayNumbers.filter((currentValue)=>{
                    return currentValue>20 && currentValue<50;
                    });
                    console.log(between20to50);

                    