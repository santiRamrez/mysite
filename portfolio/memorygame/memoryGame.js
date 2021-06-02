/*If you wanna understand the logic, watch this youtube playlist:

https://www.youtube.com/watch?v=eMhiMsEC9Uk&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw 

Thank you Marina!!
*/

const cards = Array.from(document.querySelectorAll(".card"));
const restart = document.querySelector(".restart");

//control flow
let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

let matches = 0;

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
  document.getElementById("result").textContent = matches;
}

function timerForNoMatches() {
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
    document.getElementById("result").textContent = matches;
  });
}

/** Control Matching**/

cards.forEach((card) => card.addEventListener("click", flipCard));
restart.addEventListener("click", shuffle);
