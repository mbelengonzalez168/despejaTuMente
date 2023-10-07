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
  const btnAnterior = document.getElementById("anterior");
  const btnSiguiente = document.getElementById("siguiente");
  let Index = 0;

  btnAnterior.addEventListener("click", () => {
    if (Index > 0) {
      Index--;
      updateSliderPosition();
    }
  });

  btnSiguiente.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      if (Index < cardsContainer.children.length - 1) {
        Index++;
        updateSliderPosition();
      }
    }
    else if (Index < cardsContainer.children.length - 5) {
      Index++;
      updateSliderPosition();
    }
  });

  function updateSliderPosition() {
    if (window.innerWidth < 768) {
      cardsContainer.style.transform = `translateX(-${Index * (cardWidth+120)}px)`;
      // Elimina la clase "active" de todas las tarjetas
      const cards = document.querySelectorAll(".card-completa-carrusel");
      cards.forEach((card) => {
      card.classList.remove("active");
      });
    }
    else {
      cardsContainer.style.transform = `translateX(-${Index * (cardWidth+20)}px)`;
      // Elimina la clase "active" de todas las tarjetas
      const cards = document.querySelectorAll(".card-completa-carrusel");
      cards.forEach((card) => {
      card.classList.remove("active");
      });
      // Añade la clase "active" a la tarjeta del medio
      cards[Index + 1].classList.add("active");
  }
    }

      
});









