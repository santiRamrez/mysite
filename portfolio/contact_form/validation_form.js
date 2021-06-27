// btn and contactForm were delcared at ajaxToPhp.js
console.log(btn);
console.log(contactForm);

/* If everything is OK send the data to PHP file
contactForm.addEventListener("submit", postData);
*/

// name - email - message were declared at ajaxToPhp.js

const myRegex = {
  name: /\w+/,
  email: /^[a-z]+[_\.]*\d*[\w\.]*@\w+\.[a-z]{2,3}\.?[a-z]{0,3}$/,
  attack: /<[a-z]*>/,
};

function validateName() {}

function validateEmail() {}

function validateMessage() {}
