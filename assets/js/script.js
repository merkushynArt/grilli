/* ==========================================================
   preload 
============================================================*/
const preloader = document.querySelector('[data-preaload');

window.addEventListener('load', () => {
   setTimeout(() => {
      preloader.classList.add('loaded');
      document.body.classList.add('loaded');
   }, 1000);
})
