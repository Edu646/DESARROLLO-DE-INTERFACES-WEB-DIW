const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

const cerrar_btn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

cerrar_btn.addEventListener('click', () => {
    navMenu.classList.remove('show');
});