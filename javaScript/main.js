const menu = document.querySelector(".navbar-menu");
const menuItems = document.querySelectorAll(".menuItem"); 
const hamburger= document.getElementById("hamburgerMenu");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

console.log(hamburger)
hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("showMenu");
 
}


// Slider container
const slider = document.querySelector('.products-container') 
const slides = document.querySelectorAll('.product-item')
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let current = 0 
let cycling = true

nextButton.addEventListener('click', function() {
  slider.scrollBy({
      left: slider.offsetWidth,
      behavior: 'smooth'
  });
});

prevButton.addEventListener('click', function() {
  slider.scrollBy({
      left: -slider.offsetWidth,
      behavior: 'smooth'
  });
});

// dark mode

const root = document.documentElement;

const toggle = document.getElementById("toggle");
const darkMode = localStorage.getItem("dark-mode");
if (darkMode) {
  root.classList.add("dark-theme");
}
toggle.addEventListener("click", () => {
  root.classList.toggle("dark-theme");
  if (root.classList.contains("dark-theme")) {
    localStorage.setItem("dark-mode", true);
  } else {
    localStorage.removeItem("dark-mode");
  }
});


//popup

document.addEventListener('DOMContentLoaded', function() {
  var popupButton = document.getElementById('popup-button');
  var popupContent = document.getElementById('popup-content');

  popupButton.addEventListener('click', function() {
    popupContent.classList.toggle('show');
  });
});





