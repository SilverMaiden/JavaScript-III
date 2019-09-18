/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding - When a function is called on an object using a dot, the value of “this” will be the object that comes before the dot.
* 2. Explicit binding - When we use either the .call, bind or .apply method, we are defining “this” to be a specific value for a function of our choosing.
* 3. new Binding - When using a constructor function, the value of the “this” keyword will be pointing to the instance of the object that is returned by the constructor function.
* 4. Window Binding - When the “this” keyword is given no context, it defaults to pointing at the “window”, aka the console Object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding


const coolObject = {
    coolnessLevel: 100000,
    sayHowCool: function (name) {
        console.log(`Hi ${name}, your coolness level is ${this.coolnessLevel}! That's pretty cool!`);
    },
}

coolObject.sayHowCool('Tom');

// Principle 3

// code example for New Binding

function fullName(name){
    this.name = name;
}

let myFullName = new fullName("Humaira Syed");

console.log(`Hi! My name is ${myFullName.name}`);

// Principle 4

// code example for Explicit Binding
