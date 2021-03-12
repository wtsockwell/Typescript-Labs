"use strict";
var myName = "William Taylor Sockwell";
var states = 50;
var sum = 5 + 4;
function sayHello() {
    alert("Hello World!");
}
var person = {
    name: "John",
    age: 17
};
function checkAge(options) {
    if (options.age < 21) {
        alert("Sorry " + options.name + ", you aren't old enough to view this page");
    }
    else {
        alert("Welcome " + options.name);
    }
}
var favVeg = ["spinach", "chives", "zuchini"];
for (var i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
}
var pet = {
    name: "Serenity",
    breed: "German Shepard"
};
console.log(pet.name, pet.breed);
var people = [
    {
        name: "Jacob",
        age: 32
    },
    {
        name: "Abigail",
        age: 16
    },
    {
        name: "Luke",
        age: 18
    },
    {
        name: "Austin",
        age: 50
    },
    {
        name: "Sarah",
        age: 20
    }
];
for (var i = 0; i < people.length; i++) {
    checkAge(people[i]);
}
function getLength(str) {
    var n = str.length;
    if (n % 2 == 0) {
        console.log("The World is nice and even!");
    }
    else {
        console.log("The world is an odd place!");
    }
    ;
}
;
getLength("Hello World");
