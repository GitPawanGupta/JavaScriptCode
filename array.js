// Array

const myArr = [9,8,7,4,5,6,1,2,3]

const heros = ["Sman","Bman"] 

const myArr2 = new Array (6,5,9,8,7,4,3,)

// console.log(myArr);
// console.log(heros);
// console.log(myArr2);

// ******** Array Method   ..........

myArr2.push(2)   // add
// console.log(myArr2);
myArr.pop(3)        // remove
// console.log(myArr);

myArr.unshift(3) // add in start
// console.log(myArr);
myArr2.shift(3) // remove
//console.log(myArr2);

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

// slice , splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)
const myn2 = myArr.splice(1,3)
console.log(myn1);
console.log(myn2);

console.log("B", myArr);




