//Header

var header = require('../header.js');
console.log(header.display("Ethan", "Townsend", "Exercise 3.2"));
console.log('\n');

/*
============================================
; Title:  townsend-exercise-3.2.js
; Author: Professor Krasso
; Date:   4 March 2019
; Modified By: Ethan Townsend
; Description: Factory Pattern - Javascript design patterns
;===========================================
*/

function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

// creating my Oracle class constructor
function Oracle(properties) {
    this.uername = properties.username;
    this.password = properties.password;
    this.server = properties.server;
    this.version = properties.version;
}

// creating my Informix class constructor

function Informix (properties) {
    this.username = properties.username;
    this.password = properties.password;
    this.server = properties.server;
}

function DatabaseFactory() {}

// modified the createDatabase if statement to include my new class constructors
DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    
    if (properties.databaseType === 'MySql') {
        this.databaseClass = MySql;
    }

    if(properties.databaseType === 'Oracle') {
        this.databaseClass = Oracle;
    }

    if(properties.databaseType === 'Informix') {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});


// creating my oracleFactory prototype function with the assigned values
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: 'Oracle',
    username: 'Oracle-Login',
    password: '12345678',
    server: 'localhost:8080',
    version: '3.0'
})

// creating my informixFactory prototype function with the assigned values
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: 'Informix1',
    password: '87654321',
    server: 'localhost:3000'
})

// outputing the results of the informix and oracle functions
console.log(informix);
console.log(oracle);






// end program