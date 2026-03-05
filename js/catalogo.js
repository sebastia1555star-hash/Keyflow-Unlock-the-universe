document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card-dark');
    
    // Función para animar la entrada de productos
    const animateCards = () => {
        cards.forEach((card, index) => {
            // Aplicamos un retraso basado en el índice para que aparezcan uno por uno
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    };

    // Configuración inicial de las tarjetas
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.6s ease-out';
    });

    // Iniciamos la animación
    animateCards();
});