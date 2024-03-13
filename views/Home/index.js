document.addEventListener('DOMContentLoaded', function () {
    // Texto que deseas animar
    var textToType = "Agenda con nosotros";

    // Configuración de Typed.js
    var options = {
        strings: [textToType],
        typeSpeed: 50,  // Velocidad de escritura
        showCursor: true,  // Muestra el cursor
    };

    // Inicializa Typed.js
    var typed = new Typed('#typed-text', options);
});
