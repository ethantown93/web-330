//Header

var header = require('../header.js');
console.log(header.display("Ethan", "Townsend", "Exercise 1.3"));
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

// here is my CellPhone fucntion constructor with the included properties and functions
function CellPhone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function(){
        return this.price;
    }

    this.getModel = function() {
        return this.model;
    }
    // this is my getDetails function which will return all the properties from my function constructor
    this.getDetails = function () {
        return 'Manufacturer: ' + this.manufacturer + '\nModel: ' + this.getModel() + '\nColor: ' + this.color + '\nPrice: ' + this.getPrice();
    }
}

// here is my variable that contains my new CellPhone object
var samsung = new CellPhone('Samsung', 'Samsung Galaxy S9', 'Black', '$700');

// here I am logging my new samsung variable and calling the getDetails function
console.log(samsung.getDetails());
