const btn_scroll = document.querySelector('.btn-scroll');
const feauters = document.querySelector('.feauters')

btn_scroll.onclick = () => {
  feauters.scrollIntoView();
}
