/* ==========================================================
   #preload 
============================================================*/
const preloader = document.querySelector('[data-preaload');

window.addEventListener('load', () => {
   setTimeout(() => {
      preloader.classList.add('loaded');
      document.body.classList.add('loaded');
   }, 1000);
});


/* ==========================================================
   #add event listener on multiple events
============================================================*/
const addEventOnElements = function (elements, eventType, callback) {
   for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
   }
}

/* ==========================================================
   #navbar
============================================================*/
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
   navbar.classList.toggle("active");
   overlay.classList.toggle("active");
   document.body.classList.toggle("nav-active");
}
addEventOnElements(navTogglers, "click", toggleNavbar);

const navbarLinks = document.querySelectorAll('.navbar-link');
navbarLinks.forEach(navbarLink => {
   navbarLink.addEventListener('click', () => {
      navbarLinks.forEach(navbarLink => {
         navbarLink.classList.remove('active');
      })
      navbarLink.classList.add('active');
   })
});

/* ==========================================================
   #header
============================================================*/
const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function () {
   const isScrollBottom = lastScrollPos < window.scrollY;
   if (isScrollBottom) {
      header.classList.add("hide");
   } else {
      header.classList.remove("hide");
   }
   lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
   if (window.scrollY >= 50) {
      header.classList.add("active");
      hideHeader();
   } else {
      header.classList.remove("active");
   }
});