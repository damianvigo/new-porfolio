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
