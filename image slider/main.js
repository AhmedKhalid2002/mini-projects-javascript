const slides = document.querySelector('.slider').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;
const totalSlides = slides.length;

const changeSlider = function ( direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateSlider();
};
function updateSlider() {
  const newTransformValue = -currentIndex * 100 + '%';
  document.querySelector('.slider').style.transform =
    'translateX(' + newTransformValue + ')';
}

prev.addEventListener('click', () => changeSlider(-1));
next.addEventListener('click', () => changeSlider(1));
