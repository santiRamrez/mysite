/**Get rid of pop-up **/

const popUp = document.querySelector(".pop-ups");
const startBtn = document.getElementById("startBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");

let tryAgainMsg = document.querySelector(".try-again");

function deletePopUp() {
  popUp.style.display = "none";
}

/** Start Timer **/
const elTimer = document.querySelector(".time");
let timeFirstLevel = 4; //time in minutes
let timeInSeconds = timeFirstLevel * 60;

function startingTimer() {
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds % 60;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  elTimer.textContent = `${minutes} : ${seconds}`;
  timeInSeconds--;

  /** Stop timer **/
  if (timeInSeconds < 0) {
    clearInterval(runTimer);
    tryAgainMsg.style.display = "flex";
  }
}
/** End Timer **/
let runTimer;

function startGame() {
  deletePopUp();
  runTimer = setInterval(startingTimer, 1000);
}

startBtn.addEventListener("click", startGame);
tryAgainBtn.addEventListener("click", startGame);
