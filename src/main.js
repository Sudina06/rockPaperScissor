const myScore = document.getElementById("myScore");
const cmpScore = document.getElementById("cmpScore");
const myMove = document.getElementById("myMove");
const cmpMove= document.getElementById("cmpMove");
const rock= document.getElementById("rock");
const scissor= document.getElementById("scissor");
const paper= document.getElementById("paper");
const reset= document.getElementById("reset");
const result= document.getElementById("result");
let youScore = 0;
let computerScore = 0;


rock.addEventListener("click",()=>{
    if( youScore >=5 || computerScore >=5 ){
        return;
    }
    myMove.innerText="✊"
    
    const computerChoice = Math.floor(Math.random() *3);
    if (computerChoice == 1){
        cmpMove.innerText = "✊";
        result.innerText="It is a tie!"
        
    }
    else if(computerChoice==2){
        cmpMove.innerText ="✋";
        result.innerText ="Computer won!"
        computerScore++;
    }
    else{
        cmpMove.innerText ="✌️"
        result.innerText ="You won!"
        youScore++;
    }
    myScore.innerText =youScore;
    cmpScore.innerText =computerScore;
    if(myScore.innerText == 5){
    result.innerText = "Congrats! you wonn!"
}
else if(cmpScore.innerText == 5){
    result.innerText = "Oopss! you losttttt!"
}
    
})

paper.addEventListener("click",()=>{
    if( youScore >=5 || computerScore >=5 ){
        return;
    }
    myMove.innerText="✋"
    
    const computerChoice = Math.floor(Math.random() *3);
    if (computerChoice == 1){
        cmpMove.innerText = "✊";
        result.innerText="You won!";
        youScore++;
        
    }
    else if(computerChoice==2){
        cmpMove.innerText ="✋";
        result.innerText ="It is a tie!"
        
    }
    else{
        cmpMove.innerText ="✌️"
        result.innerText ="Computer won!"
        computerScore++;
    }
    myScore.innerText =youScore;
    cmpScore.innerText =computerScore;
    if(myScore.innerText == 5){
    result.innerText = "Congrats! you wonn!"
}
else if(cmpScore.innerText == 5){
    result.innerText = "Oopss! you losttttt!"
}
    
})

scissor.addEventListener("click",()=>{
    if( youScore >=5 || computerScore >=5 ){
        return;
    }
    myMove.innerText="✌️"
    const computerChoice = Math.floor(Math.random() *3);
    if (computerChoice == 1){
        cmpMove.innerText = "✊";
        result.innerText="Computer won!";
        computerScore++;
        
    }
    else if(computerChoice==2){
        cmpMove.innerText ="✋";
        result.innerText ="You won!"
        youScore++;
    }
    else{
        cmpMove.innerText ="✌️"
        result.innerText ="It is a tie!"
       
    }
    myScore.innerText =youScore;
    cmpScore.innerText =computerScore;
    if(myScore.innerText == 5){
    result.innerText = "Congrats! you wonn!"
}
else if(cmpScore.innerText == 5){
    result.innerText = "Oopss! you losttttt!"
}
    
})

reset.addEventListener("click" , ()=>{
    myMove.innerText = "✊"
    cmpMove.innerText = "🤖";
    result.innerText = "✨ Your turn - choose a move!"
    youScore = 0;
    computerScore = 0;
    myScore.innerText="0";
    cmpScore.innerText = "0"


})