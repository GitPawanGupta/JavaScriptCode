const num1 = [1,2,3]
const num2 = [4,5,6]

const num3 = num1.concat(num2)
const num4 = [...num1, ... num2]
//console.log(num4);


//console.log(num3);

const another_array = [1,2,3,[4,5,6,[7,8,9],9,8,5],5,3,2]
const real_array =another_array.flat(Infinity)

console.log(real_array);


