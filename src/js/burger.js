const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const body = document.querySelector('body');
const items = document.querySelector('.nav__list');

burger.onclick = () => {
  if (nav.classList.contains('nav_active')){
    body.style = "";
    nav.classList.remove('nav_active');
    burger.classList.remove('burger_active');
  } else {
    body.style = "overflow: hidden";
    nav.classList.add('nav_active');
    burger.classList.add('burger_active');
  }
}

items.onclick = () => {
  body.style = "";
  nav.classList.remove('nav_active');
  burger.classList.remove('burger_active');
}
