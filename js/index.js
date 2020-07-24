import sticky from './modules/sticky_footer.js';
import hamburguerMenu from './modules/hamburguer_menu.js';
import scrollTopButton from './modules/scroll-boton.js';
import darkMode from './modules/darkMode.js';
import scrollParallax from './modules/scroll_parallax.js';
import contactFormValidations from './modules/validaciones_formulario.js';

const d = document;
const w = window;

d.addEventListener('DOMContentLoaded', (e) => {
  contactFormValidations();
  sticky('.header');
  hamburguerMenu('.panel-btn', '.panel', '.panel__menu-a');
  scrollTopButton('.scroll-top-btn');
  darkMode('#switch');
  scrollParallax('.hero-image__perfil');
});

w.addEventListener('load', function () {
  Grade(document.querySelectorAll('.more__proyects'));
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
