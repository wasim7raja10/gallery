const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImg = document.querySelectorAll('.gallery-img');
let current = 0;

prevBtn.addEventListener('click', function () {
  galleryImg[current].classList.remove('active');
  current--;
  galleryImg[current].classList.add('active');
  nextBtn.disabled = false;
  if (current === 0) {
    prevBtn.disabled = true;
  }
});

nextBtn.addEventListener('click', function () {
  galleryImg[current].classList.remove('active');
  current++;
  galleryImg[current].classList.add('active');
  prevBtn.disabled = false;
  if (galleryImg.length === current + 1) {
    nextBtn.disabled = true;
  }
});