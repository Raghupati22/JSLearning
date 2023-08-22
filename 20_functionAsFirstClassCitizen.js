//In JS we call function as first class citizen
//1. Function expression
//2. callback
//3. Function can return another function

function show(){

    console.log(`Inside show function`);
    let innnerFunction=function(){
        console.log(`Inside inner function`);
    }
    return innnerFunction;
}

let inner=show();
inner();
//show()();


