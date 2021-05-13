const canvas = document.getElementById("tenPrintCanvas");
//ctx is an object
//Using canvas api we`re going to work on the ctx "context" variable
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "#07334B";
ctx.fillRect(0, 0, canvas.width, canvas.height); //render the canvas on screen

let xBackslash = 0;
let yBackslash = 0;
let xSlash = 40;
let ySlash = 0;

function backslash() {
  ctx.strokeStyle = "#F4F4F4";
  ctx.beginPath(); // Start a new path
  ctx.moveTo(0, 0); // Beginning of the line
  ctx.lineTo(20, 20); // Ending of the line
  ctx.stroke(); // Render the path
}
function slash() {
  ctx.strokeStyle = "#F4F4F4";
  ctx.beginPath(); // Start a new path
  ctx.moveTo(40, 0); // Beginning of the line
  ctx.lineTo(20, 20); // Ending of the line
  ctx.stroke(); // Render the path
}
backslash();
slash();
