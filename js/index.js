import sticky from './modules/sticky_footer.js';
import hamburguerMenu from './modules/hamburguer_menu.js';
import scrollTopButton from './modules/scroll-boton.js';
import darkMode from './modules/darkMode.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  sticky('.header');
  hamburguerMenu('.panel-btn', '.panel', '.panel__menu-a');
  scrollTopButton('.scroll-top-btn');
  darkMode('#switch');
});

const overlay = document.getElementById('overlay');
d.querySelectorAll('.proyects__images__img').forEach((el) => {
  el.addEventListener('click', () => {
    const rute = el.getAttribute('src');
    const description = el.parentNode.dataset.description;
    overlay.classList.add('active');
    d.querySelector('.overlay__img').src = rute;
    d.querySelector('.overlay__description').innerHTML = description;
  });
});

d.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
  overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
  // overlay.classList.remove('active');
  e.target.id === 'overlay' ? overlay.classList.remove('active') : '';
});
