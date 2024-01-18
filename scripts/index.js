/*
There are eight data types in JavaScript. 
Seven of them are called “primitive”, 
because their values contain only a single thing

https://javascript.info/object
*/

/*
Objects are used to store keyed collections of various data 
and more complex entities.
*/

let u = new Object();
let u2 = {};

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

// You can add a property
user.isAdmin = true;

// delete a property
delete user.isAdmin;

// We can also use multiword property names, but then they must be quoted
// and used in brackets
user["likes birds"] = true;

// A property can be named with a variable, thus determined at runtime

let key = 'favoriteCar';

user[key] = "Camaro";

console.log(user);

console.log(user[key]);

// There are no limitations on property names. 

let obj = {
  for: 1,
  let: 2,
  return: 3
};

console.log( obj.for + obj.let + obj.return );  

// Test for existence of a property with 'in'
let u3 = { name: "John", age: 30 };

console.log("age", "age" in u3 ); // true, user.age exists
console.log("blabla" , "blabla" in u3 ); // false, user.blabla doesn't exist


// You can loop through an object with 'in'

for (let key in user) {
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( user[key] ); // John, 30, true
  }

// Integer properties The “integer property” term here means a string that 
// can be converted to-and-from an integer without a change.
// Integer properties are ordered by value
//  Other properties are in order of their definition


let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    console.log(code, codes[code]); // 1, 41, 44, 49
  }