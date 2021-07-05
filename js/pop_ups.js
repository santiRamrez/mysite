let popUpDownloadCV = document.querySelector(".pop_ups-container");
let closeBtnDownloadCV = document.getElementById("closePopUpDownloadCV");
let btnDownloadCV = document.getElementById("downloadCV");

function showPopUpDownloadCV() {
  popUpDownloadCV.style.transform = "scale(1) translate(-50%, -50%)";
}

function closePopUpDownloadCV() {
  popUpDownloadCV.style.transform = "scale(0) translate(-50%, -50%)";
}

btnDownloadCV.addEventListener("click", showPopUpDownloadCV);
closeBtnDownloadCV.addEventListener("click", closePopUpDownloadCV);
