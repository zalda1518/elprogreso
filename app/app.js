const slide = document.getElementById('carousel-slide');
const images = slide.querySelectorAll('img');
let index = 0;

function moveSlide(step) {
   index = (index + step + images.length) % images.length;
   slide.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => moveSlide(1), 5000); // autoplay cada 5 segundos



const galeria = document.getElementById('carousel-slide-galeria');
const imagesGaleria = galeria.querySelectorAll('img');
let indexGaleria = 0;

function moveGaleria(item) {
   indexGaleria = (indexGaleria + item + imagesGaleria.length) % imagesGaleria.length;
   galeria.style.transform = `translateX(-${indexGaleria * 100}%)`;
}
setInterval(() => moveGaleria(1), 30000); // autoplay cada 30 segundos


/* scroll menu superior */
let lastScroll = 0;

let header = document.getElementById('header');
window.addEventListener('scroll', () => {
   let currentScroll = window.pageYOffset;

   if (currentScroll > lastScroll) {
      header.classList.add('hide');
   } else {
      header.classList.remove('hide');
   }

   lastScroll = currentScroll <= 0 ? 0 : currentScroll
})

/* preloader */
window.addEventListener("load", () => {
   if (window.screenY > 100) {
      const preloader = document.getElementById("preloader");
      preloader.classList.add("fade-out");
      setTimeout(() => preloader.style.display = "none", 600);
   }

});

/* preloader */

