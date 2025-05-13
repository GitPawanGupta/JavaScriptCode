// Stack (Primitive), Heap (Non-Primitive)

let myName="PawanGupta"

let anotherName = myName

myName="Aryan"

console.log(myName);
console.log(anotherName);

let user1 = {
    userId:"123456",
    password:"121212"

}
let user2 = user1
user2.userId="987654"
console.log(user1.userId);
console.log(user2.userId);

