/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER CLOTHING ===============*/
let swiperHome = new Swiper('.home__swiper', {
   loop: true,
   grabCursor: true,
   slidesPerView: 'auto',
   
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   
   breakpoints:{
      768: {
         slidesPerView: 3,
         centeredSlides: 'auto',
      },
      1152: {
         centeredSlides: 'auto',
         spaceBetween: -64,
      },
   },
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
   const header = document.getElementById('header')
   // Add a class if the bottom offset is greater than 50 of the viewport
   this.scrollY >= 50 ? header.classList.add('bg-header') 
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   // reset: true // Animations repeat
})

sr.reveal(`.home__swiper, .home__footer`)
sr.reveal(`.home__circle`, {scale: 1.5, delay: 300})
sr.reveal(`.home__subcircle`, {scale: 1.5, delay: 500})
sr.reveal(`.home__title`, {scale: 1, origin: 'bottom', delay: 1200})
sr.reveal(`.swiper-button-prev, .swiper-button-next`, {origin: 'bottom'})

/*=============== HOODIES TIMER ===============*/
const countDownDate = new Date("September 22, 2024 00:00:00").getTime();

const interval = setInterval(() => {
   const now = new Date().getTime();
   const duration = countDownDate - now;

   if (duration < 0) {
      clearInterval(interval);
      updateDuration(0);
      return;
   }
   updateDuration(duration);
}, 1000);

function updateDuration(duration) {
   const days = Math.floor(duration / (1000 * 60 * 60 *24));
   const hours = Math.floor((duration % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
   const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((duration % (1000 * 60)) / 1000);

   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;
}

/*=============== Faqs Section ===============*/

const faqs = document.querySelectorAll(".faqs__container");

faqs.forEach((faq) => {
   faq.addEventListener("click", () => {
      faq.classList.toggle("active");
   });
});