const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
   return userInput;
  }
   else {
    console.log('Error!');
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => { if(userChoice === 'bomb') {
  return 'BOOM! You blew up the computer! You win!';
}
  if(userChoice === computerChoice) {
    return 'Oh wow! It looks like this game is a tie!';
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
       return 'Ouch! The computer won.';
     } else {
       return 'You won!';
      }
    }
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Sadly the computer won!';
    } else {
      return 'You beat the computer!';
    }
  }
 if(userChoice === 'scissors') {
   if(computerChoice === 'rock') {
     return 'Oh no! The computer won!';
   } else {
     return 'You won!';
   }
 }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
