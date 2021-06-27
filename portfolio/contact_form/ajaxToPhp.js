const btn = document.querySelector("#submit");
const contactForm = document.getElementById("contactForm");

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;

//It actually works!!
function getData(e) {
  e.preventDefault(); //Don't send the data when the page has loaded

  var data = [name, email, message];
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "send_email.php?name=" + name, true);
  //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else if (this.status == 404) {
      console.log("No lo lograste bebe");
    }
  };
  xhr.send();
}

function postData(e) {
  e.preventDefault(); //Don't send the data when the page has loaded

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var data = {
    name: name,
    email: email,
    message: message,
  };

  var jsonContactForm = JSON.stringify(data);
  var params = "data=" + jsonContactForm;

  let xhr = new XMLHttpRequest();

  xhr.open("POST", "send_email.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else if (this.status == 404) {
      console.log("No lo lograste bebe");
    }
  };
  xhr.send(params);
}

//btn.addEventListener("click", getData);
