console.log('=============== Assignment 1 ==========================');
let arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`First elment of Array is : ${arrayFruits[0]}`);
console.log(`Last elment of Array is : ${arrayFruits[arrayFruits.length-1]}`);

arrayFruits.unshift("Papaya");
console.log(`Array Element is : ${arrayFruits}`);

arrayFruits.splice(4,1);
console.log(`Array Element is : ${arrayFruits}`);

arrayFruits.push("Pineapple");
console.log(`Array Element is : ${arrayFruits}`);

arrayFruits.splice(4,0,"Dragon Fruit")
console.log(`Array Element is : ${arrayFruits}`);

arrayFruits.splice(2,1,"Kiwi");
console.log(`Array Element is : ${arrayFruits}`);

console.log('Index 1 to 4 Element ');
for (let index = 1; index < 5; index++) {
    const element = arrayFruits[index];
    console.log(element);
}

console.log('last 3 Element');
console.log(`Last Element is : ${arrayFruits[arrayFruits.length-1]}`);
console.log(`Second Last Element is : ${arrayFruits[arrayFruits.length-2]}`);
console.log(`Third Last Element is : ${arrayFruits[arrayFruits.length-3]}`);


