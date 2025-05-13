let firstName="Pawan"
let lastName="Gupta"

//console.log("My Name Is "+firstName +" "+ lastName);

console.log(`My First Name is ${firstName} and Last Name Is ${lastName}`);

const oldName = new String('Pawan-Gupta')
// console.log(oldName.length);
//console.log(oldName[3]);
console.log(oldName.toUpperCase());
console.log(oldName.toLowerCase());
console.log(oldName.charAt(3));
console.log(oldName.indexOf('n'));
console.log(oldName.substring(0,5));
console.log(oldName.split(0,4));
console.log(oldName.slice(-10, 4));

const anotherString = "    Pawan Gupta            "
console.log(anotherString);
console.log(anotherString.trim());



const url = "https:/pawan.com/pawan%20Gupta"
console.log(url.replace('%20', '/'));

console.log(url.includes('Gupta'));
console.log(url.includes('rawan'));











