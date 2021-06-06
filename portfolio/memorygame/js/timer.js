const popUp = document.querySelector(".pop-ups");
const startBtn = document.getElementById("startBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");

let tryAgainMsg = document.querySelector(".try-again");

function deletePopUp() {
  popUp.style.display = "none";
  tryAgainMsg.style.display = "none";
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
    setTimeout(stopGame, 1000);
  }
}
/** End Timer **/
let runTimer;

function startGame() {
  //shuffle();
  deletePopUp();
  runTimer = setInterval(startingTimer, 1000);
}

function stopGame() {
  tryAgainMsg.style.display = "flex";
  timeFirstLevel = 4;
  timeInSeconds = timeFirstLevel * 60;
  level = 1;
  restart.addEventListener("click", startGame);
}

startBtn.addEventListener("click", startGame);
tryAgainBtn.addEventListener("click", restartGame);
