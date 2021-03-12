import $ from 'jquery'

let dice:Array<Die> = []

class Die {
    public value: JQuery
    public div:JQuery
    constructor(){
        this.value = $("<h1></h1>");
        this.div = $(`<div class=die></div>`)
        this.roll()
        $("#container").append(this.div)
        this.value.appendTo(this.div)
        this.change()
        this.delete()
    }
    public roll(){
        let value = (Math.floor(Math.random()*6)+1)
        this.value.text(value)
    }
    public change(){
        this.div.click(()=>{
            this.roll()
        })
    }
    public delete(){
        this.div.dblclick(()=>{
            let position = dice.indexOf(this)
            this.div.remove()
            dice.splice(position,1)
        })
    }
}

$("#makeDie").click(()=>{
    let die = new Die()
    dice.push(die)
})

$("#rollDie").click(()=>{
    dice.forEach(die => {
        die.roll()
    })
})

$("#sumDice").click(()=>{
    let diceValue:number[] = []
    for(let i = 0; i<dice.length; i++){
        diceValue.push(Number(dice[i].value[0].textContent))
    }
    function sum(a:number,b:number){
        return a+b
    }
    let total = diceValue.reduce(sum)
    alert(`The total is ${total}`)
})