"use strict";
const misBotones = document.querySelectorAll('.miBoton');

let comprado= 'Comprado';
let jugar='Jugar';
let contenidoOriginal = miBoton.textContent;


misBotones.forEach(function(miBoton) {
    miBoton.addEventListener("click", function() {
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
  });

//-------------CARRUSEL------------------------------------------------------------//

    document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector(".carrusel");
    const cardWidth = document.querySelector(".card-completa-carrusel").offsetWidth;
    const prevButton = document.getElementById("anterior");
    const nextButton = document.getElementById("siguiente");
    let currentIndex = 0;
  
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    });
  
    nextButton.addEventListener("click", () => {
      if (currentIndex < cardsContainer.children.length - 4) {
        currentIndex++;
        updateSliderPosition();
      }
    });
  
    function updateSliderPosition() {
      cardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    // Elimina la clase "active" de todas las tarjetas
    const cards = document.querySelectorAll(".card-completa-carrusel");
    cards.forEach((card) => {
      card.classList.remove("active");
    });
    
    // Añade la clase "active" a la tarjeta del medio
    cards[currentIndex + 1].classList.add("active");
    
    
    }
    });









