const btn = document.querySelector("#submit");
const contactForm = document.getElementById("contactForm");

let elName = document.getElementById("name");
let elEmail = document.getElementById("email");
let elMessage = document.getElementById("message");

let myData = [elName, elEmail, elMessage];

let username, email, message;

//get the values of each input
myData.forEach((data) => {
  data.addEventListener("keyup", function () {
    //Format username
    username = formatName(elName.value).trim();
    email = elEmail.value.toLowerCase();
    message = elMessage.value;
  });
});

//render the ideal format of the inputs name and email to the users
myData.forEach((data) => {
  data.addEventListener("focusout", function () {
    if (username == undefined && email == undefined) {
      return;
    }
    elName.value = "";
    elName.value = username;

    elEmail.value = "";
    elEmail.value = email;
  });
});

function postDataToYou(e) {
  e.preventDefault(); //Don't send the data when the page has loaded

  var data = {
    name: username,
    email: email,
    message: message,
  };

  var jsonContactForm = JSON.stringify(data);
  var params = "data=" + jsonContactForm;

  let xhr = new XMLHttpRequest();

  xhr.open("POST", "./scripts/sendEmailToYou.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    if (this.status == 200) {
      //Function declared on validaton_form.js
      showOkMessage("Your message has been sent!");
      console.log(this.responseText);
    } else if (this.status == 404) {
      console.log("No lo lograste bebe");
    }
  };
  xhr.send(params);
}

function postDataToUser(e) {
  e.preventDefault(); //Don't send the data when the page has loaded

  var data = {
    name: username,
    email: email,
    message: message,
  };

  //var jsonContactForm = JSON.stringify(data);
  var params = "email=" + data.email;

  let xhr = new XMLHttpRequest();

  xhr.open("POST", "./scripts/sendEmailToUser.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    if (this.status == 200) {
      //Function declared on validaton_form.js
      //showOkMessage("Your message has been sent!");
      console.log(this.responseText);
    } else if (this.status == 404) {
      console.log("No lo lograste bebe");
    }
  };
  xhr.send(params);
}

let button = document.getElementById("btnSendForm");

function sendToPhpFiles(e) {
  e.preventDefault();

  if (validateData()) {
    postDataToUser(e);
    postDataToYou(e);
    console.log(validateData());
  } else {
    validateData();
  }
}

contactForm.addEventListener("submit", sendToPhpFiles);
