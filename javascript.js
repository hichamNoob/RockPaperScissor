function getComputerChoice(){
    let choice;
    randomNumber= Math.floor(Math.random() * (4-1))+1;
    if( randomNumber== 1){
        choice="rock";  
    }
    else if( randomNumber== 2){
        choice="paper";
    }
    else if (randomNumber== 3){
        choice="scissor";
    }
    return choice;
}

 
  let computerSelection;
   let playerSelection;

function playRound(playerSelection, computerSelection) {
   
    let modifiedSelection= playerSelection.toLowerCase();
     
    if( modifiedSelection==="rock" && computerSelection==="scissor" || modifiedSelection==="paper" && computerSelection==="rock" || modifiedSelection==="scissor" && computerSelection==="paper" ){
        return "You Win!";
        
       }    
       else if ( modifiedSelection==="rock" && computerSelection==="paper" || modifiedSelection==="paper" && computerSelection==="scissor" ||  modifiedSelection==="scissor" && computerSelection==="rock" ){
        return "You Lose!";
       }
        else{
            return "It's a Tie!";
        }
 
       
             

}


function game(){
    let win=0;
     let lose=0;
    for (let i = 1; i <= 5; i++) {
        
        computerSelection=getComputerChoice();
        playerSelection = prompt("Please choose either rock, paper, or scissor: ");
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection) === "You Win!") {
            win++;
          } else if (playRound(playerSelection, computerSelection) === "You Lose!") {
            lose++;
          }
      }
      if(win>lose){
        return "Congratulations! You Win";
      }
      else if(win<lose){
        return "Unfortunally! You Lose";
      }
      else{
        return "You Tie!";
      }     


}

console.log( game());
