
function hamcrose() {
  const hamburger = document.querySelector('.hamburger');
  const slideInContainer = document.querySelector('.slide-in-container');

  if (hamburger.classList.contains('open')) {
      hamburger.classList.remove('open');
      slideInContainer.style.display = 'none';
  } else {
      hamburger.classList.add('open');
      slideInContainer.style.display = 'block';
  }
}