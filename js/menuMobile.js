const bottom = document.getElementById("btnMobile");
const closeMenuMobile = document.getElementById("closeMobile");
const myNav = document.getElementById("myNav");

let showMenu = () => (myNav.style.width = "100%");
let closeMenu = () => (myNav.style.width = "0%");

bottom.addEventListener("click", showMenu, false);
closeMenuMobile.addEventListener("click", closeMenu, false);

/*Date at the button of the index page */

const dateObj = new Date();
const ele = document.getElementById("year");
ele.textContent = dateObj.getFullYear();
