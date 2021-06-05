/*If you wanna understand the logic, watch this youtube playlist:

https://www.youtube.com/watch?v=eMhiMsEC9Uk&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw 

Thank you Marina!!
*/

const cards = Array.from(document.querySelectorAll(".card"));
const restart = document.querySelector(".restart");
const showLevel = document.getElementById("level");

let nextLevelMsg = document.querySelector(".next-level");
let nextLevelBtn = document.getElementById("nextLevel");

//control flow
let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

let matches = 0;
let level = 1;

showLevel.textContent = level;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flipped");

  if (!hasFlipped) {
    hasFlipped = true;
    firstCard = this;
  } else {
    //second click
    hasFlipped = false;
    secondCard = this;
    checkForMatch();
  }
}

function checkForMatch() {
  let hasMatched = firstCard.dataset.checking == secondCard.dataset.checking;
  hasMatched ? isMatch() : timerForNoMatches();
}

function isMatch() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
  matches += 1;

  /** Check for next level **/
  let nextLevel = matches == 8;
  if (nextLevel) {
    nextLevelMsg.style.display = "flex";
    clearInterval(runTimer);
    timeFirstLevel -= 1.5;
    timeInSeconds = timeFirstLevel * 60;
    elTimer.textContent = "";
  }
}

function timerForNoMatches() {
  console.log("timerForNoMatches()");
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Restart
function shuffle() {
  cards.forEach((card) => {
    let randomOrder = Math.floor(Math.random() * 16);
    card.classList.remove("flipped");
    card.style.order = randomOrder;
    matches = 0;
  });
  resetBoard();
  cards.forEach((card) => card.addEventListener("click", flipCard));
}

function startGame() {
  document.addEventListener("DOMContentLoaded", shuffle);
}

function goNextLevel() {
  clearInterval(runTimer);
  nextLevelMsg.style.display = "none";
  level++;
  showLevel.textContent = level;
  shuffle();
  setTimeout(() => {
    runTimer = setInterval(startingTimer, 1000);
  }, 500);
}

//startGame();

cards.forEach((card) => card.addEventListener("click", flipCard));
restart.addEventListener("click", shuffle);
nextLevelBtn.addEventListener("click", goNextLevel);
