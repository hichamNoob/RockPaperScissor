let randomNumber; // Declare the variable here
let computerSelection;
let playerSelection;

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
  let win = 0;

  let lose = 0;
  while (  win<5 && lose<5 ) {
    computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
    if (playRound(playerSelection, computerSelection) === "Congratulations! You Win") {
      win++;
    } else if (playRound(playerSelection, computerSelection) === "Unfortunately! You Lose") {
      lose++;
    }
  }
  if (win > lose) {
    return "Congratulations! You Win";
  } else if (win < lose) {
    return "Unfortunately! You Lose";
  } else {
    return "You Tie!";
  }
}

const gameButton = document.querySelectorAll('.gameButton');
 gameButton.forEach(button=> button.addEventListener('click', ()=>{ 
  playerSelection=button.textContent;
   const result=game();
   alert(result);
 } ) )

 
  
 





 // buttons.forEach(function (button) {
  //button.addEventListener('click', function() {
    //const choice = button.textContent;
    //alert(game(choice));
  //});
// });




