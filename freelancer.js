let navBar = document.querySelector("nav");
let header = document.querySelector(".header");

window.onscroll = function () {
  if (window.scrollY > 0) {
    navBar.style.background = "#eefff9";
  } else {
    navBar.style.background = "transparent";
  }
};
