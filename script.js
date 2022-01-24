let moon = document.querySelector(".moon");
let header = document.querySelector(".head");

window.onscroll = () => {
  let scrollNumY = window.scrollY;
  
  moon.style.top = `${scrollNumY}px`;
  header.style.left = `${scrollNumY * 2}px`
};
