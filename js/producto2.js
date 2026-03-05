let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = document.querySelectorAll('#slider img').length;

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(dir) {
    currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
    updateSlider();
}

// Carrusel automático cada 5 segundos
let autoPlay = setInterval(() => moveSlide(1), 5000);

// Detener si el usuario interactúa
document.querySelectorAll('.arrow').forEach(button => {
    button.addEventListener('click', () => clearInterval(autoPlay));
});

// Notificación de carrito
document.getElementById('addToCart').addEventListener('click', () => {
    const qty = document.getElementById('qty').value;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-shopping-basket" style="color: #ff9900;"></i> 
                       <span>¡Ardilla añadida! <strong>${qty} unidad(es)</strong> en la cesta.</span>`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = '0.5s';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
});