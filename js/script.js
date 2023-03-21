
///////////// CAROUSEL /////////////

const slider = document.querySelector('.novitaCarousel');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

///////////// MENU' /////////////
const openNav = document.querySelector(".linkNavSection");
const btnMenu = document.querySelector(".menuBtn");
const linkNav1 = document.querySelector(".linkProdotti");
const linkNav2 = document.querySelector(".linkCollezioni");
const linkNav3 = document.querySelector(".linkProgetti");
const linkNav4 = document.querySelector(".linkInspiration");
const linkNav5 = document.querySelector(".linkDesigner");

const linksNav =[linkNav1,linkNav2,linkNav3,linkNav4,linkNav5];

btnMenu.addEventListener('click', () => {
    openNav.classList.toggle("menuTog");
    btnMenu.classList.toggle("btnMenuClose");
});

function menuSelect(linkNav) {
  linkNav.addEventListener('click', () => {
    openNav.classList.remove("menuTog");
    btnMenu.classList.remove("btnMenuClose");
})
}

linksNav.forEach(element => {
  menuSelect(element);
});