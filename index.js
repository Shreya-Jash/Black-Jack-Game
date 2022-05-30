let player={
    name:"Shreya",
    chips: 200
}
let cards=[]
let sum = 0
let hasBlackJack =false
let isAlive =false
let message=""
let queS=document.getElementById("ques")
let sumEl=document.getElementById("sumel")
let cardS=document.getElementById("cards")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard()
{
    let randomNumber= Math.floor(Math.random()*13)+1
    if(randomNumber>10)
    {
        return 10
    }
    else if(randomNumber===11){
        return 11
    }
    else{
        return randomNumber
    }
}
function startGame(){
    isAlive=true
    let firstCard= getRandomCard()
    let secondCard =getRandomCard()
    cards = [firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame()
{
    cardS.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardS.textContent+=cards[i] + " "
    }
    sumEl.textContent="Sum: " + sum
    if(sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum === 21)
    {
        message="Wohoo! You've gor Blackjack!"
        hasBlackJack=true
    }
    else{
        message="You are out of the game!"
        isAlive=false
    } 
    queS.textContent=message
}
function newCard(){
    if(isAlive===true && hasBlackJack === false)
    {
    let thirdCard=getRandomCard()
    sum= sum+thirdCard
    cards.push(thirdCard)
    }
    renderGame()
}