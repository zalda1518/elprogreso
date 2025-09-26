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
window.addEventListener("DOMContentLoaded", () => {
   
      const preloader = document.getElementById("preloader");
      preloader.classList.add("fade-out");
      setTimeout(() => preloader.style.display = "none", 600);
   

});

/* preloader */
