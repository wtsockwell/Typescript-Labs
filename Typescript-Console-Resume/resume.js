"use strict";
var myName = "William Taylor Sockwell";
var career = "Student/Junior web dev";
var description = "White, brown curly hair, 6 ft tall";
var interests = ["Gaming", "Coding", "reading", "Writing"];
var past = [
    {
        name: "Ruby Tuesday",
        title: "Chef/Shift Lead",
        descript: "Prepared food to order, began to learn the manager side of the restaurant"
    },
    {
        name: "Skynet",
        title: "t-1000",
        descript: "Travel back in time and kill Sarah Connor and John Connor"
    },
    {
        name: "Wayland Yutani",
        title: "Researcher",
        descript: "Visit alien worlds and research life posibilies"
    },
    {
        name: "Self Employed",
        title: "Taker",
        descript: "Employ a certain set of skills to find and kill those who have taken my daughter"
    }
];
var skills = [
    { name: "Cooking", cool: false },
    { name: "Taking", cool: false },
    { name: "Traveling back in time", cool: true },
    { name: "Giving birth to alien life", cool: true },
    { name: "walk through thin metal bars", cool: false }
];
function displayPosition(options) {
    console.log(options.title + " at " + options.name + " - " + options.descript);
}
function displaySkills(options) {
    if (options.cool === true) {
        console.log("BAM:" + options.name);
    }
    else {
        console.log(options.name);
    }
}
console.log("Name: " + myName.toUpperCase());
console.log("Career: " + career);
console.log("Description: " + description);
console.log(" ");
console.log("Myinterests:");
for (var i = 0; i < interests.length; i++) {
    console.log(interests[i]);
}
console.log(" ");
for (var i = 0; i < past.length; i++) {
    displayPosition(past[i]);
}
console.log(" ");
for (var i = 0; i < skills.length; i++) {
    displaySkills(skills[i]);
}
