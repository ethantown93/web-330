//Header

var header = require('../header.js');
console.log(header.display("Ethan", "Townsend", "Exercise 1.4"));
console.log('\n');

/*
============================================
; Title:  townsend-exercise-1.3.js
; Author: Professor Krasso
; Date:   20 February 2019
; Modified By: Ethan Townsend
; Description: Class refresher on object literals and functions
;===========================================
*/

// this is my Car function constructor
function Car(model) {
    this.model = model;
}

// here I am adding a method to my Car function constructors prototype
Car.prototype.start = function() {
    console.log('Car added to the racetrack!');
}

// this is my Truck function constructor
function Truck(model, year) {
    this.model = model;
    this.year = year;
}

// here I am adding a method to my Truck function constructors prototype
Truck.prototype.start = function() {
    console.log('Truck added to the racetrack!');
}

// this is my Jeep function constructor
function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}

// here I am adding a method to my Jeep function constructors prototype
Jeep.prototype.start = function() {
    console.log('Jeep added to the racetrack!');
}

// creating an empty array to hold our data
var racetrack = [];

// this driveIt function will be pushing all of the data to our racetrack array
function driveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
}

// new objects created from our function constructors
var lamborghini = new Car('Lamborghini');
var fordRaptor = new Truck('Ford Raptor', '2019');
var rangler = new Jeep('Rangler', '2019', 'White')

console.log('');

//calling our driveIt function
driveIt(lamborghini);
driveIt(fordRaptor);
driveIt(rangler);

console.log('\n-- These cars have been added to the racetrack! --\n');

// looping over our racetrack array and outputting the results
for (var i = 0; i < racetrack.length; i++){
    console.log(racetrack[i].constructor.name + ': ' + racetrack[i].model);
}

