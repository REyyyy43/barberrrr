document.addEventListener('DOMContentLoaded', function() {
    const addToCartLinks = document.querySelectorAll('.add-to-cart-btn');
    const totalPriceElement = document.getElementById('total-price');

    (async () => {
        try {
            const { data } = await axios.get('/api/prevs');
            console.log(data); // Imprimir los datos recibidos del servidor
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    })();

    let totalPrice = 0;

    addToCartLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la redirección

            const serviceName = link.dataset.serviceName;
            const servicePrice = parseFloat(link.dataset.servicePrice);
            const serviceDuration = link.dataset.serviceDuration;

            if (!isNaN(servicePrice)) {
                const cartItem = document.createElement('li');
                cartItem.textContent = `${serviceName} - ${serviceDuration} - ${servicePrice} €`;

                const cancelLink = document.createElement('a');
                cancelLink.href = '#';
                cancelLink.textContent = 'Cancelar';
                cancelLink.classList.add('px-2', 'py-1', 'text-red-500', 'text-white', 'rounded', 'ml-2', 'cancel-btn');
                cartItem.appendChild(cancelLink);

                document.getElementById('cart-items').appendChild(cartItem);

                totalPrice += servicePrice;
                totalPriceElement.textContent = totalPrice.toFixed(2);

                cancelLink.addEventListener('click', function(event) {
                    event.preventDefault();
                    cartItem.remove();
                    totalPrice -= servicePrice;
                    totalPriceElement.textContent = totalPrice.toFixed(2);
                });
            } else {
                console.error('El precio del servicio no es válido:', servicePrice);
            }
        });
    }); 
});

 // Obtener el botón de "Aceptar" y el modal
 let acceptBtn = document.getElementById("accept-btn");
 let modal = document.getElementById("myModal");

 // Agregar un event listener al botón de "Aceptar"
 acceptBtn.addEventListener("click", function() {
     // Mostrar el modal cambiando su clase de "hidden" a ""
     modal.classList.remove("hidden");

     // Obtiene los detalles del servicio seleccionado de los atributos de datos del botón
    const serviceName = checkoutButton.getAttribute('data-service-name');
    const serviceDuration = checkoutButton.getAttribute('data-service-duration');
    const servicePrice = checkoutButton.getAttribute('data-service-price');

    // Actualiza el contenido del modal con los detalles del servicio seleccionado
    const modalServiceNameElement = document.getElementById('modal-service-name');
    const modalServiceDurationElement = document.getElementById('modal-service-duration');
    const modalServicePriceElement = document.getElementById('modal-service-price');

    modalServiceNameElement.textContent = serviceName;
    modalServiceDurationElement.textContent = serviceDuration;
    modalServicePriceElement.textContent = servicePrice;

 });
  

  // Creating a date object
  let today = new Date();
        
  // Getting full month name (e.g. "June")
  let month = today.toLocaleString('default', { month: 'long' });
  
  // Concatenating year and month strings and setting as innerHTML
  document.getElementById("date").innerHTML = month + " " + today.getFullYear();

   // Obtener referencia a los botones de navegación
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Obtener referencia al elemento que muestra el número de día
const dayElement = document.getElementById('label1');

// Fecha inicial
let currentDate = new Date();
let currentDay = currentDate.getDate();

// Función para actualizar el número de día
function updateDay(day) {
    dayElement.textContent = day;
}

// Manejar clic en la flecha de retroceso
prevBtn.addEventListener('click', function() {
    currentDay--; // Restar un día
    if (currentDay < 1) {
        // Si llega al primer día del mes, retroceder al último día del mes anterior
        currentDate.setMonth(currentDate.getMonth() - 1);
        currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    }
    updateDay(currentDay); // Actualizar el número de día mostrado
});

// Manejar clic en la flecha de avance
nextBtn.addEventListener('click', function() {
    currentDay++; // Sumar un día
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    if (currentDay > lastDayOfMonth) {
        // Si llega al último día del mes, avanzar al primer día del mes siguiente
        currentDate.setMonth(currentDate.getMonth() + 1);
        currentDay = 1;
    }
    updateDay(currentDay); // Actualizar el número de día mostrado
});

// Actualizar el número de día inicial
updateDay(currentDay);