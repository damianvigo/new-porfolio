export default function scrollParallax(s) {
  const d = document;
  const w = window;
  const $heroImage = d.querySelector(s);

  w.addEventListener('scroll', () => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    $heroImage.style.transform = 'translateY(' + scrollTop * -0.4 + 'px)';
  });
}
