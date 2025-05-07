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

  const whereInputWrapper = document.getElementById('whereInputWrapper');
  const regionPopup = document.getElementById('regionPopup');
  const whereInput = document.getElementById('whereInput');

  if (whereInputWrapper && regionPopup && whereInput) {
    whereInputWrapper.addEventListener('click', (e) => {
      regionPopup.style.display = 'block';
      e.stopPropagation();
    });

    document.addEventListener('click', () => {
      regionPopup.style.display = 'none';
    });

    regionPopup.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    const regionItems = regionPopup.querySelectorAll('.region-item');
    regionItems.forEach(item => {
      item.addEventListener('click', function() {
        const icon = this.querySelector('.region-icon');
        let value = this.textContent.trim();
        if (icon) {
          value = value.replace(icon.textContent, '').trim();
        }
        whereInput.value = value;
        regionPopup.style.display = 'none';
      });
    });
  }
});