const nav = document.querySelector('.navbar');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
