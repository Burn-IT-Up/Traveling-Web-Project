function scrollCarousel(button, direction) {
  const container = button.parentElement.querySelector('.destination-wrapper');
  const scrollAmount = 450;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
function goToTransport() {
  window.location.href = 'transport.html';
}
document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  function initSlider() {
      slides.forEach((slide, index) => {
          if (index === 0) slide.classList.add('active');
          else slide.classList.remove('active');
      });
  }

  function updateSlider() {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      slides.forEach((slide, index) => {
          slide.classList.toggle('active', index === currentIndex);
      });
  }

  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
  });

  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
  });

  setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
  }, 8000);


  initSlider();
});