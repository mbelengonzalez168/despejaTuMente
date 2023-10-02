"use strict";
const miBoton = document.getElementById('miBoton');

let comprado= 'Comprado';
let jugar='Jugar';
let contenidoOriginal = miBoton.textContent;

// Agrega un manejador de clic al botón
miBoton.addEventListener('click', function () {
    // Verifica el contenido actual del botón
    if (miBoton.textContent !== jugar) {
        // Si el contenido es diferente de "Jugar", cambia a "Comprado"
        miBoton.textContent = comprado;
        miBoton.classList.add('clickeado');

        // Después de un tiempo, quita la clase para volver al estado original
        setTimeout(function () {
            miBoton.classList.remove('clickeado');
            // Después de otro tiempo, cambia el contenido a "Jugar"
            setTimeout(function () {
                miBoton.textContent = jugar;
                // Después de 15 segundos, vuelve al contenido original
                setTimeout(function () {
                    miBoton.textContent = contenidoOriginal;
                }, 15000); // 15 segundos en milisegundos
            }, 1000); // 1 segundo en milisegundos
        }, 1000); // 1 segundo en milisegundos
    } 
});


