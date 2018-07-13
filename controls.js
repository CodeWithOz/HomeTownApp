const hamburger = document.querySelector('.hamburger');

// toggle navbar when hamburger is clicked
hamburger.addEventListener('click', event => {
  event.preventDefault();
  const navList = document.querySelector('.nav__list');
  navList.classList.toggle('open');
});
