/* --- FORMULARIO 1: PEDIDO DE CLIENTE --- */
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const miTelefono = "593998456370"; 

        const nombre = document.getElementById('nombreWA').value;
        const email = document.getElementById('emailWA').value;
        const producto = document.getElementById('productSelect').value;
        const mensajeUser = document.getElementById('mensajeWA').value;

        const mensajeTexto = 
            `🚀 *NUEVO PEDIDO DE LLAVERO* 🚀\n` +
            `_______________________________\n\n` +
            `👤 *Cliente:* ${nombre}\n` +
            `📧 *Correo:* _${email}_\n` +
            `📦 *Producto:* ${producto}\n` +
            `💬 *Mensaje:* ${mensajeUser}\n` +
            `_______________________________\n` +
            `✨ *Enviado desde Mi Minisitio*`;

        const urlWhatsApp = `https://wa.me/${miTelefono}?text=${encodeURIComponent(mensajeTexto)}`;

        // Animación visual
        const formContainer = document.getElementById('formContainer');
        const thanksMessage = document.getElementById('thanksMessage');

        formContainer.style.opacity = '0';
        formContainer.style.transition = '0.4s';

        setTimeout(() => {
            formContainer.style.display = 'none';
            thanksMessage.style.display = 'block';

            window.open(urlWhatsApp, '_blank');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 5000);
        }, 400);
    });
}

/* --- FORMULARIO 2: REGISTRO DE VENDEDOR --- */
const sellerForm = document.getElementById('uploadProductForm');
if (sellerForm) {
    sellerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const miTelefono = "593998456370"; 

        const vendedor = document.getElementById('vendedorNombre').value;
        const producto = document.getElementById('vendedorProducto').value;
        const precio = document.getElementById('vendedorPrecio').value;
        const desc = document.getElementById('vendedorDesc').value;

        const mensajeVenta = 
            `🏪 *SOLICITUD DE NUEVO VENDEDOR* 🏪\n` +
            `_______________________________\n\n` +
            `👤 *Vendedor:* ${vendedor}\n` +
            `📦 *Producto:* ${producto}\n` +
            `💰 *Precio sugerido:* $${precio}\n` +
            `📝 *Descripción:* ${desc}\n` +
            `_______________________________\n` +
            `📢 *Revisar fotos para publicar en Mi Minisitio.*`;

        Swal.fire({
            title: '¡Recibido!',
            text: 'Estamos revisando tu producto. Serás redirigido a WhatsApp para concretar los detalles y las fotos.',
            icon: 'success',
            background: '#111', 
            color: '#fff',      
            confirmButtonColor: '#ff9900', 
            confirmButtonText: 'Ir a WhatsApp 🚀'
        }).then((result) => {
            if (result.isConfirmed) {
                const urlFinal = `https://wa.me/${miTelefono}?text=${encodeURIComponent(mensajeVenta)}`;
                window.open(urlFinal, '_blank');
                sellerForm.reset();
            }
        });
    });
}