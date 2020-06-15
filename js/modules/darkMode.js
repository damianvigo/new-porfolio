const d = document;

export default function darkMode(btn) {
  const $btnDarkMode = d.querySelector(btn);

  $btnDarkMode.addEventListener('click', () => {
    d.body.classList.toggle('dark');
    $btnDarkMode.classList.toggle('active');
  });
}
