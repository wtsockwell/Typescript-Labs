let myName: string = "William Taylor Sockwell";
const states: number = 50
let sum: number = 5+4

function sayHello(): void{
    alert("Hello World!")
}

interface person {name:string, age:number}

let person:person = {
    name:"John",
    age:17
}

function checkAge(options:{name:string, age:number}){
    if (options.age < 21) {
        alert(`Sorry ${options.name}, you aren't old enough to view this page`)
    } else {
        alert(`Welcome ${options.name}`)
    }
}

let favVeg:string[] = ["spinach","chives","zuchini"]

for(let i = 0; i<favVeg.length;i++){
    console.log(favVeg[i])
}

interface pet {name:string, breed: string}

let pet:pet = {
    name: "Serenity",
    breed: "German Shepard"
}
console.log(pet.name, pet.breed)

let people:person[] = [
    {
        name: "Jacob",
        age:32
    },
    {
        name:"Abigail",
        age:16
    },
    {
        name:"Luke",
        age:18
    },
    {
        name:"Austin",
        age:50
    },
    {
        name:"Sarah",
        age:20
    }
]

for (let i = 0; i<people.length; i++){
    checkAge(people[i])
}

function getLength(str:string){
    
    var n=str.length;
    if(n % 2 ==0){
        console.log("The World is nice and even!");
    } else {
        console.log("The world is an odd place!");
    };
};

getLength("Hello World")