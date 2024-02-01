let navBar = document.querySelector("nav");
let header = document.querySelector(".header");

// Hiding and displaying the Menu bar in  responsive

let menuList = document.querySelector(".Menu-Link")  
let menuImg = document.querySelector(".menu-img")
// function ToggleEvent(){
    // menuList.classList.toggle("show-menu");         //this is the other way to write the fuction in which onclick event is addede on HTMl
// }
// 

menuImg.onclick =  function (){
    menuList.classList.toggle("show-menu");
}


window.onscroll = function () {
  if (window.scrollY > 0) {
    navBar.style.background = "#eefff9";
  } else {
    navBar.style.background = "transparent";
  }
};







