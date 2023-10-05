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











/*







// Agrega un manejador de clic al botón
misBotones.forEach(function(miBoton) {
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
}
});*/

/*


    const contenedorCategoria = document.querySelector('.contenedor-cards');

    const botonAnterior = document.getElementById('anterior');
    const botonSiguiente = document.getElementById('siguiente');
    const cardsConteiner = document.querySelector('.cards-container');
    const cardCompleta = document.querySelectorAll('.card-completa');

    botonAnterior.addEventListener('click', e => moverIzquierda ());
    botonSiguiente.addEventListener('click', e => moverDerecha ());

    let index = 0;
    let whithImg= 100 /5;

    function moverDerecha (){

        index= -index  + whithImg
        cardsConteiner.style.transform = `translate(${index}%)`;
    };

    function moverIzquierda (){

        index= -index  - whithImg
        cardsConteiner.style.transform = `translate(${index}%)`;
    };
*/
    //--------------------------CARRUSEL 2-----------------------------------------------------//    /* document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector(".cards-container");
    const cards = document.querySelectorAll(".card-completa");
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth;

    function showCard(index) {
        cardsContainer.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    document.getElementById("anterior").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });

    document.getElementById("siguiente").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });



//--------------------------CARRUSEL 3-----------------------------------------------------//
/*
function scrollEv(anterior, siguiente, carrusel) {
    if (carrusel.scrollLeft <= 0) {
      anterior.classList.add("arrow-inactive");
    } else {
      anterior.classList.remove("arrow-inactive");
    }
    if (carrusel.scrollLeft >= carrusel.scrollWidth - carrusel.offsetWidth - 1) {
      siguiente.classList.add("arrow-inactive");
    } else {
      siguiente.classList.remove("arrow-inactive");
    }
  }
  function clicleftArrow(carrusel, rectList) {
    let shiftScroll;
    for (let i = 0; i < rectList.length; i++) {
      if (carrusel.scrollLeft > rectList[rectList.length - 1]) {
        shiftScroll = rectList[rectList.length - 1];
      } else if (
        carrusel.scrollLeft > rectList[i] &&
        carrusel.scrollLeft <= rectList[i + 1]
      ) {
        shiftScroll = rectList[i];
      }
    }
    carrusel.scrollTo({
      left: shiftScroll,
      behavior: "smooth"
    });
  }
  function clickRight(carrusel, rectList) {
    let shiftScroll;
    for (let i = 0; i < rectList.length; i++) {
      if (
        carrusel.scrollLeft >= rectList[i] - 1 &&
        carrusel.scrollLeft < rectList[i + 1]
      ) {
        shiftScroll = rectList[i + 1];
      }
    }
    carrusel.scrollTo({
      left: shiftScroll,
      behavior: "smooth"
    });
  }
  function listRectCarousel(carouselNumber, carrusel) {
    let card = carrusel[carouselNumber].getElementsByClassName("card-completa");
    let rectList = [];
    let rectGauche = carrusel[carouselNumber].getBoundingClientRect().left;
    for (let i = 0; i < card.length; i++) {
      let rect = card[i].getBoundingClientRect();
      rectList.push(rect.left - rectGauche);
    }
    for (let i = rectList.length - 1; i >= 0; i--) {
      rectList[i] = rectList[i] - rectList[0];
    }
    return rectList;
  }
  function autoSlidePosLeft(carouselNumber, carrusel, anterior) {
    let rectList = listRectCarousel(carouselNumber, carrusel);
    anterior[carouselNumber].addEventListener("click", () => {
      clicleftArrow(carrusel[carouselNumber], rectList);
    });
  }
  function autoSlidePosRight(carouselNumber, carrusel, siguiente) {
    let rectList = listRectCarousel(carouselNumber, carrusel);
    siguiente[carouselNumber].addEventListener("click", () => {
      clickRight(carrusel[carouselNumber], rectList);
    });
  }
  window.onload = () => {
    let anterior = document.getElementsById("anterior");
    let siguiente = document.getElementsById("siguiente");
    let carrusel = document.getElementById("cards-container");
    for (let i = 0; i < anterior.length; i++) {
      autoSlidePosLeft(i, carrusel, anterior);
      window.onresize = () => {
        autoSlidePosLeft(i, carrusel, anterior);
      };
    }
    for (let i = 0; i < siguiente.length; i++) {
      autoSlidePosRight(i, carrusel, siguiente);
      window.onresize = () => {
        autoSlidePosRight(i, carrusel, siguiente);
      };
    }
    for (let i = 0; i < carrusel.length; i++) {
      carrusel[i].addEventListener("scroll", () => {
        scrollEv(anterior[i], siguiente[i], carrusel[i]);
      });
    }
    for (let i = 0; i < carrusel.length; i++) {
      scrollEv(anterior[i], siguiente[i], carrusel[i]);
      window.onresize = () => {
        scrollEv(anterior[i], siguiente[i], carrusel[i]);
      };
    }
  
  };
*/