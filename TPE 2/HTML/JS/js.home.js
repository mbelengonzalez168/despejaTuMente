"use strict";
const miBoton = document.getElementById('miBoton');

// Agrega un manejador de clic al botón
miBoton.addEventListener('click', function() {
    // Verifica el contenido actual del botón
    if (miBoton.textContent === '$15') {
        // Si el contenido es "$15", cambia a "Jugar"
        miBoton.textContent = 'Jugar';
        miBoton.classList.add('clickeado');
        // Después de un tiempo, quita la clase para volver al estado original
        setTimeout(function() {
        miBoton.classList.remove('clickeado');
        }, 1000); // Cambiar el tiempo según tus preferencias

    } else {
        // Si el contenido es diferente de "$15", cambia a "$15"
        miBoton.textContent = '$15';
    }
});

