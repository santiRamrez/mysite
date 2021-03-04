const quotes = [
  "Intenta no volverte un hombre de éxito, sino volverte un hombre de valor.",
  "Albert Einstein",
  "Quien nunca ha cometido un error nunca ha intentado nada nuevo.",
  "Albert Einstein",
  'Una computadora puede ser llamada "inteligente" si logra engañar a una persona haciéndole creer que es un humano.',
  "Alan Turing",
  "Las cosas no tienen que cambiar el mundo para ser importantes.",
  "Steve Jobs",
  "Quiero hacer una cosa y hacerla bien.",
  "Jan Koum",
  "Donde quiera que trabajen personas inteligentes, las puertas se abren.",
  "Steve Wozniak",
  "Aprendí que el coraje no era la ausencia de miedo, sino el triunfo sobre él. El valiente no es quien no siente miedo, sino aquel que conquista ese miedo.",
  "Nelson Mandela.",
  "Después de escalar una montaña muy alta, descubrimos que hay muchas otras montañas por escalar",
  "Nelson Mandela",
  "Tu verdad aumentará en la medida que sepas escuchar la verdad de los otros",
  "Martin Luther King",
  "Creo que es posible que la gente común elija ser extraordinaria.",
  "Elon Musk",
  "La libertad está en ser dueños de nuestra propia vida",
  "Platón",
  "Las ciencias y la literatura llevan en sí la recompensa de los trabajos y vigilias que se les consagran.",
  "Andrés Bello",
];

const text = document.getElementById("quote");
const author = document.getElementById("author");
let arrLength = quotes.length;

function randomParNumber(min, max) {
  let index = Math.floor(Math.random() * (max - min)) + min;
  if (index % 2 == 0) {
    return index;
  } else {
    return index - 1;
  }
}

function showQuote() {
  let arrIndex = randomParNumber(0, arrLength);
  text.textContent = quotes[arrIndex];
  author.textContent = quotes[arrIndex + 1];
}

document.addEventListener("DOMContentLoaded", showQuote);
