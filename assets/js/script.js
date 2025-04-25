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
