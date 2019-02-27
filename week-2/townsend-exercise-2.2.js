//Header

var header = require('../header.js');
console.log(header.display("Ethan", "Townsend", "Exercise 2.2"));
console.log('\n');

/*
============================================
; Title:  townsend-exercise-2.2.js
; Author: Professor Krasso
; Date:   26 February 2019
; Modified By: Ethan Townsend
; Description: Prototypes
;===========================================
*/

/*
 Expected output:

 FirstName LastName
 Exercise 2.2 - Prototypes
 February 26, 2019

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

var person = {
    
    getAge: function() {
        return this.age;
    }
}

var ethan = Object.create(person, {
    
    "age":{
        "value": "26",
    },
    
    "fullname": {
        "value": "Ethan Townsend"
    }
});

ethan.getAge();

console.log('The person\s full name is ' + ethan.fullname);
console.log('The person\s age is ' + ethan.age);


// end program