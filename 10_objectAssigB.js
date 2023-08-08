console.log('===========Assignment 2==============================');
let sbiBank={
    bankName:"SBI Bank",
    location: "Pune",
    accountNo: 778899,
    ifsc: "SBI003"
}

let bankLocation={
    street:"SBI Bank",
    city: "Pune",
    pinCode: 411023,
}

let hdfcBank=Object.assign({},sbiBank);
let mylocation=Object.assign({},bankLocation);

console.log(`hdfc bank clone details is : ${hdfcBank.bankName}`);
console.log(`my location clone details is : ${bankLocation.city}`);

let axisBank={...sbiBank};
let personalLocation={...bankLocation};

console.log(`axis bank clone : ${axisBank.bankName}`);
console.log(`personal location clone : ${personalLocation.city}`);

let rateOfInterest={
    homeLoanInterest: 8.5,
    personalLaonInterest:10.10,
    dueInterest: 7.5
}

let sbiDetails=Object.assign({},sbiBank,bankLocation,rateOfInterest);

console.table(sbiDetails);

for (const key in sbiDetails) {
    if (sbiDetails.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`Key: ${key} and Value : ${element}`);
    }
}

