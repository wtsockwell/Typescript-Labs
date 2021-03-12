let myName: string = "William Taylor Sockwell";
let career: string = "Student/Junior web dev";
let description: string = "White, brown curly hair, 6 ft tall";
let interests: string[] = ["Gaming", "Coding", "reading", "Writing"];

interface past { name: string, title: string, descript: string }

let past: past[] = [
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
]

interface skills { name: string, cool: boolean }

let skills: skills[] = [
    { name: "Cooking", cool: false },
    {name:"Taking", cool:false}, 
    {name:"Traveling back in time", cool:true},
    {name:"Giving birth to alien life", cool:true},
    {name:"walk through thin metal bars", cool:false}
]

function displayPosition(options:past) {
    console.log(`${options.title} at ${options.name} - ${options.descript}`)
}

function displaySkills(options:{name:string, cool:boolean}){
    if(options.cool === true){
        console.log(`BAM:${options.name}`)
    } else {
        console.log(options.name)
    }
}

console.log(`Name: ${myName.toUpperCase()}`)
console.log(`Career: ${career}`)
console.log(`Description: ${description}`)
console.log(" ")
console.log("Myinterests:")
for (let i = 0; i< interests.length; i++){
    console.log(interests[i])
}
console.log(" ")
for (let i = 0; i<past.length; i++){
    displayPosition(past[i])
}
console.log(" ")
for(let i = 0; i<skills.length; i++){
    displaySkills(skills[i])
}