let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}*/

function playGame(playerMove) {
  let computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else {
      result = 'Tie.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else {
      result = 'You lose.';
    }
  } else {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You 
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement () {
  document.querySelector('.js-score').innerHTML = 
  `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  let randomNum = Math.random();
  let computerMove = '';

  if (randomNum >= 2 / 3){
    computerMove = 'scissors';
  }
  else if (randomNum >= 1 / 3) {
    computerMove = 'paper';
  } 
  else {
    computerMove = 'rock';
  }
  return computerMove;
}