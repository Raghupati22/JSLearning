let jenny={
    fullName:"Elon Musk",
    age: 22,
    city: "Pune",
    college: "COEP Pune",
  
}

marks={
    physics:100,
    science:99,
    math:92
}

let mergeObject=Object.assign({},jenny,marks);
console.table(mergeObject);