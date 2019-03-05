//Header

var header = require('../header.js');
console.log(header.display("Ethan", "Townsend", "Exercise 3.3"));
console.log('\n');

/*
============================================
; Title:  townsend-exercise-3.3.js
; Author: Professor Krasso
; Date:   4 March 2019
; Modified By: Ethan Townsend
; Description: Singleton Pattern - Javascript design patterns
;===========================================
*/

// creating our singleton module, storing it in our variable, and instantiating it
var DatabaseSingleton = (function(){
// creating  our local internal reference
    var instance;

// function that initiates the object
    function instance() {

        var test = new Object('Database instance initialized!');

        return test;
    }

// returning public properties and methods from our object
    return {
        getInstance: function(){
            if(!instance) {
                instance = instance();
            }

            return instance;
        }
    }

})();

// creating a function that stores both instances in separate variables, then logs the variables to the console to test the output
function databaseSingletonTest() {
    var test1 = DatabaseSingleton.getInstance();
    var test2 = DatabaseSingleton.getInstance();

    console.log("Same database instance? " + (test1 === test2));
}

// calling the test function to log the output
databaseSingletonTest();
