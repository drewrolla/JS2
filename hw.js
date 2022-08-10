//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"], // snake case and not camel case???
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// definitely need a for loop
// the following will show the things in a dictionary
for (const [key, value] of Object.entries(person3)){
    console.log(key, value)
}

// but if we want it to be fancy and say, "X's favorite food is: "
// tbh, probably not the most efficient way of doing this
let printFoods = () => {
    console.log(`Favorite pizza types are: ${person3.pizza},\n
    Fav tacos are ${person3.tacos},\n
    fav burgers are ${person3.burgers},\n
    fav ice cream flavors are ${person3.ice_cream},\n
    fav shakes:\n
    oberwise - ${person3.shakes[0].oberwise},\n
    dunkin -  ${person3.shakes[0].dunkin},\n
    culvers - ${person3.shakes[0].culvers},\n
    mickey d's - ${person3.shakes[0].mcDonalds},\n
    cupid's candies - ${person3.shakes[0].cupids_candies}`)
}

printFoods()

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        return `Name: ${this.name}\n Age: ${this.age}`
    }

    countUp = (() => {
        return function() {return this.age++} // the return here shows the age in the console, otherwise it just shows undefined
    })()
}

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

let p1 = new Person('Drew', 2000);
let p2 = new Person('Wes', 2000);
console.log(p1.printInfo())
console.log(p2.printInfo())
console.log(p1.countUp())
console.log(p1.countUp())
console.log(p1.countUp())
console.log(p1.printInfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
// "ARROWS!"" - Donald Glover, Community, S3Ep20 "Digital Estate Planning"

const checkStr = (string) => {
    return new Promise((resolve, reject)=>{
        if (string.length > 10){
            resolve("nice.")
        } else {
            reject("bummer.")
        }
    })
}
const result = checkStr('California')
console.log(result) // currently throwing small number
// nvm just realized that California is actually just 10 letters long and the code isn't problematic

// need to use the .then() and .catch()?
checkStr('California').then((result)=>{
    console.log("Big word")
}).catch((result)=>{
    console.log("Small number")
})


// Codewars Problems
// Did previously in Python. JS syntax is so weird - needed to add .split('') and .join('') to make function work.
// Did not work with just str.reverse() which boggles my mind
// Reversed Strings
function solution(str){
    return str.split('').reverse().join('');
  }

// Done ONLY in JS. Not done in Python previously.
// Convert a Boolean to a String www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
function booleanToString(b){
    return b.toString()
  }

// Another for good measure
// Basic Mathematical Operations www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
// learning the switch statements came in handy 
function basicOp(ops, val1, val2)
{
  switch(ops){
      case "+": return val1 + val2
      case "-": return val1 - val2
      case "*": return val1 * val2
      case "/": return val1 / val2
  }
}
