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
