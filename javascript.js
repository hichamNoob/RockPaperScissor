let randomNumber; // Declare the variable here
let computerSelection;
let playerSelection;
let win=0;
 let lose=0;

function getComputerChoice() {
  let choice;
  randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;
  if (randomNumber == 1) {
    choice = "rock";
  } else if (randomNumber == 2) {
    choice = "paper";
  } else if (randomNumber == 3) {
    choice = "scissor";
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (!playerSelection) {
    return "Please enter a valid choice (rock, paper, or scissor).";
  }
  let modifiedSelection = playerSelection.toLowerCase();
  if (modifiedSelection !== "rock" && modifiedSelection !== "paper" && modifiedSelection !== "scissor") {
    return "Invalid choice. Please choose either rock, paper, or scissor.";
  }

  if (
    (modifiedSelection === "rock" && computerSelection === "scissor") ||
    (modifiedSelection === "paper" && computerSelection === "rock") ||
    (modifiedSelection === "scissor" && computerSelection === "paper")
  ) {
    return "Congratulations! You Win";
  } else if (
    (modifiedSelection === "rock" && computerSelection === "paper") ||
    (modifiedSelection === "paper" && computerSelection === "scissor") ||
    (modifiedSelection === "scissor" && computerSelection === "rock")
  ) {
    return "Unfortunately! You Lose";
  } else {
    return "You Tie!";
  }
}


function game() {
  
  
    computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
    if (playRound(playerSelection, computerSelection) === "Congratulations! You Win") {
      win++;
      
    } else if (playRound(playerSelection, computerSelection) === "Unfortunately! You Lose") {
      lose++;
      
    }
  

   
}
const playerResult=document.querySelector('.playerResult');

 
  const computerResult=document.querySelector('.computerResult');
  playerResult.textContent="Your Score= "+win;
  computerResult.textContent="The computer Score= "+lose;
  const finalResult=document.querySelector('.finalResult');
const gameButton = document.querySelectorAll('.gameButton');

 gameButton.forEach(button=> button.addEventListener('click', ()=>{ 
 
   if( win<5 && lose<5){
  playerSelection=button.textContent;

   const result=game();
   playerResult.textContent="Your Score= "+win;
   computerResult.textContent="The computer Score= "+lose;
   }
   if( win==5){
    finalResult.textContent="Congratulations! You Win";
   
    return 
   }
   else if(lose==5){
    finalResult.textContent="You Lose";
    return 

   }
   
 } ) );

   
 // pop the results on the webpage 

 
  
 





 // buttons.forEach(function (button) {
  //button.addEventListener('click', function() {
    //const choice = button.textContent;
    //alert(game(choice));
  //});
// });




