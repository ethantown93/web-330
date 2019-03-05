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

// start program

// creating my object literal which will return my age
var person = {
    
    getAge: function() {
        return this.age;
    }
}

// creating my new object literal which defines my full name and age
var ethan = Object.create(person, {
    
    "age":{
        "value": "26",
    },
    
    "fullname": {
        "value": "Ethan Townsend"
    }
});

// calling my getAge function
ethan.getAge();

// outputting the results
console.log('The person\s full name is ' + ethan.fullname);
console.log('The person\s age is ' + ethan.age);


// end program