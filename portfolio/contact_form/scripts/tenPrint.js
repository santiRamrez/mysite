const canvas = document.getElementById("tenPrintCanvas");
//ctx is an object
//Using canvas api we`re going to work on the ctx "context" variable
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight + 10;

ctx.fillStyle = "#07334B";
ctx.fillRect(0, 0, canvas.width, canvas.height); //render the canvas on screen

function drawLine(startX, startY, endX, endY) {
  ctx.strokeStyle = "#F4F4F4";
  ctx.beginPath(); // Start a new path
  ctx.moveTo(startX, startY); // Beginning of the line
  ctx.lineTo(endX, endY); // Ending of the line
  ctx.stroke(); // Render the path
}

let x = 0;
let y = 0;
let spacing = 60;

let renderIt = () => {
  let random = Math.random().toFixed(2);
  if (random < 0.5) {
    drawLine(x, y, x + spacing, y + spacing);
  } else {
    drawLine(x + spacing, y + 0, x + 0, y + spacing);
  }
  x += spacing;
  if (x > canvas.width) {
    x = 0;
    y += spacing;
  }
};

let execute;

if (y > canvas.height) {
  clearInterval(execute);
}

/*************** Intersection Observer ****************/

//new IntersectionObserver(callback, options);

const section = document.getElementById("aboutMe");
const options = {};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      execute = setInterval(renderIt, 100);
      console.log(entry.target);
    }
  });
}, options);

observer.observe(section);
