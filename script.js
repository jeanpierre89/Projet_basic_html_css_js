const carousel = document.querySelector(".carousel");
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * carousel.clientWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

function startCarousel() {
  setInterval(nextSlide, 3000); // Trocará a imagem a cada 3 segundos (3000 milissegundos)
}

window.addEventListener("resize", () => {
  updateCarousel();
  carousel.style.transition = "none"; // Remover a transição durante o redimensionamento
  setTimeout(() => {
    carousel.style.transition = "transform 0.3s ease-in-out"; // Adicionar de volta a transição após um pequeno atraso
  }, 0);
});

// Inicialização
updateCarousel();
startCarousel();