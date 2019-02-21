/*
============================================
; Title:  townsend-discussion-5.1.js
; Author: Professor Krasso
; Date:   09 January 2019
; Modified By: Ethan Townsend
; Description:  Advanced Arrays
;===========================================
*/

//this is my sandwhich function constructor
function Sandwhich(component1, component2) {
    this.component1 = component1;
    this.component2 = component2;
}

// here I'm creating a new object from my sandwhich object constructor
var pb = new Sandwhich('Peant butter', 'Jelly','Bread');
console.log(pb);

// here I'm adding a property to my function constructor via it's prototype.
Sandwhich.prototype.component3 = 'Bread';

console.log(pb.component3);


