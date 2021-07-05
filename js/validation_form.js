// btn and contactForm were delcared at ajaxToPhp.js
// name - email - message were declared at ajaxToPhp.js

function formatName(theName) {
  arr = theName.toLowerCase().split(" ");
  str = "";
  arr.forEach((word) => {
    str += word.substr(0, 1).toUpperCase() + word.substr(1) + " ";
  });

  return str;
}

const myRegex = {
  name: /^[a-z]+\s?[a-z]*/i,
  email: /^[a-z]+[_\.]*\d*[\w\.]*@\w+\.[a-z]{2,3}$/,
};

let regexAttack = /(SELECT|<[a-z]|<\?)/;

let elContainerMessages = document.querySelector(".messages");
let typeMessage = document.querySelector("#elMessage");

function showErrorMessage(msg) {
  elContainerMessages.classList.add("error-message");
  typeMessage.textContent = msg;
}

function showOkMessage(msg) {
  elContainerMessages.classList.add("ok-message");
  typeMessage.textContent = msg;
}

function validateData() {
  // It is true if the conditions of the regular expressions are truthy.
  let testName = myRegex.name.test(username);
  let testEmail = myRegex.email.test(email);
  let testAttack = false;

  if (regexAttack.test(username) || regexAttack.test(email)) {
    testAttack = true;
    showErrorMessage("Fuck You");
    return false;
  } else if (regexAttack.test(message)) {
    testAttack = true;
    showErrorMessage("Fuck You");
    return false;
  }

  if (testEmail == false) {
    showErrorMessage("Use gmail.com or yourdomain.cl");
    return false;
  }

  if (testName && testEmail && testAttack == false) {
    console.log("Enviar datos");
    return true;
  } else {
    showErrorMessage("Please check your data");
    return false;
  }
}
