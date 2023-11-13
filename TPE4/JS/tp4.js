"use strict"

/*---------------------------MINI-HEADER--------------------*/
const header = document.getElementById('main-header');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('mini');
        logo.classList.add('logo-mini');
    } else {
        header.classList.remove('mini');
        logo.classList.remove('logo-mini');
    }
});
/*--------------------DUENDE-VERDE--------------------*/
const duendeVerde = document.getElementById('duende-verde');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Ajusta la velocidad de movimiento del duende verde
    const velocidadDuende = 0.2;
    const transformValue = `translateY(${scrollY * velocidadDuende}px)`;
    duendeVerde.style.transform = transformValue;
});


/*----------------------pto 9--------------------------*/
    const seccion = document.querySelector(".personajes-section");
    const personajes = document.querySelectorAll(".personaje");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const seccionTop = seccion.offsetTop;
        const seccionBottom = seccionTop + seccion.offsetHeight;

        // Verificar si la sección está en la vista
        if (scrollPosition > seccionTop && scrollPosition < seccionBottom) {
            personajes.forEach((personaje, index) => {
                const positionFromBottom = (index + 1) * 100; // Ajusta según sea necesario-  Distancia entre cada personaje
                const height = window.innerHeight - positionFromBottom;
                const altura = positionFromBottom + 60;
                console.log('win' +window.innerHeight);
                console.log('pos' + positionFromBottom);
                console.log('altura' + altura);
                personaje.style.transitionDelay = `${index * 0.3}s`; // retraso entre un personaje y otro
                personaje.style.bottom = `-${positionFromBottom}px`;
             personaje.style.height = `${altura + 70}px`; // ////ESTO hay q mejorar----la altura segun edificios
            //  console.log(height);
                personaje.classList.add("visible");  
            });
        } else {
            personajes.forEach((personaje) => {
                personaje.classList.remove("visible");
            });
        }
    });


/*----------------------------------------------------------------*/
/*const imagenes = document.querySelectorAll('.image');

const alturaPantalla = window.innerHeight;

window.addEventListener('scroll', () => {
    imagenes.forEach((imagen, index) => {
        const rect = imagen.getBoundingClientRect();

        if (rect.top < alturaPantalla * 0.25 && rect.bottom >= alturaPantalla * 0.25) {
            imagenes.forEach((img) => img.classList.remove('img-active'));
            imagen.classList.add('img-active');
            }
    });
    
});
*/




/*
    const textElements = document.querySelectorAll('.text');
    const scrollPosition = window.scrollY;
    console.log(textElements);
    window.addEventListener('scroll', function () {
        
       textElements.forEach((text, index) => {
            const offset = text.offsetTop;
            const isVisible = scrollPosition > offset - window.innerHeight / 2;

            if (isVisible) {
                text.classList.add('text.visible');
                texto.style.transform = "translateY(0)";
            }
        });
       
    });



/*

document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.querySelectorAll('.image');
    let imagenActual = 0;
    
console.log(imagenes);

    function mostrarImagenSiguiente() {
        imagenes[imagenActual].classList.remove('image');
        imagenActual = (imagenActual + 1) % imagenes.length;
        imagenes[imagenActual].classList.add('image');
    }

    // Agregar evento al contenedor de texto para mostrar la siguiente imagen
    const contenedorTexto = document.querySelector('#text-container');
    contenedorTexto.addEventListener('scroll', function () {
        mostrarImagenSiguiente();
    });
    const lala = document.querySelector('#image-21-pFU');
let text= document.querySelector(".title-2");
    
    lala.addEventListener("click", function(){
        text.classList.add("texto");
        console.log("LALAL");
    
    });
    
});*/
/*
document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("image-container");
    const textContainer = document.getElementById("text-container");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        // Check if the image container is in the view
        if (scrollPosition > imageContainer.offsetTop) {
            const images = imageContainer.querySelectorAll("img");
            console.log(images);
            images.forEach((image, index) => {
                setTimeout(() => {
                    image.classList.add('img-active');
                }, index * 500); // Adjust the delay as needed
            });
        }

        // Check if the text container is in the view
        if (scrollPosition > textContainer.offsetTop) {
            const textos = textContainer.querySelectorAll(".text");
            console.log(textos);
            textos.forEach((texto, index) => {
                setTimeout(() => {
                    texto.classList.add('text-active');
                    texto.style.transform = "translateY(0)";
                }, index * 500); // Adjust the delay as needed
            });
        }
    });
});*/



/*
const textElements = document.querySelectorAll('.text');
const imageElements = document.querySelectorAll('.image');
const imageContainer = document.getElementById("image-container");
console.log(textElements);
// Función para manejar el evento de desplazamiento

function handleScroll() {
    let visibleIndex = -1;

    // Verificar qué elemento está actualmente visible
    textElements.forEach((text, index) => {
        const rect = text.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            visibleIndex = index;
        }
    });

    // Agregar/Quitar la clase 'visible' según el índice actual
    textElements.forEach((text, index) => {
        const shouldBeVisible = index === visibleIndex;
        text.classList.toggle('visible', shouldBeVisible);
    });
    
    let currentIndex = 0;
    const containerRect = imageContainer.getBoundingClientRect();

        if (containerRect.top < window.innerHeight && currentIndex < images.length) {
            images[currentIndex].style.opacity = 1;
            currentIndex++;
        }
   






    
}


// Agregar un escuchador de eventos de desplazamiento
window.addEventListener('scroll', handleScroll);

// Llamar a la función handleScroll para verificar la visibilidad inicial
handleScroll();*/
/*
const imageContainer = document.getElementById("image-container");
const textContainer = document.getElementById("text-container");

const alturaPantalla = window.innerHeight;

window.addEventListener('scroll', () => {
    let imagenes = imageContainer.querySelectorAll("img");
    imagenes.forEach((imagen, index) => {
        let rect = imagen.getBoundingClientRect();
        console.log(rect);
        if (rect.top < alturaPantalla  && rect.bottom >= alturaPantalla ) {
            imagenes.forEach((img) => img.classList.remove('img-active'));
            imagen.classList.add('img-active');
            }
    });
    
        
});
const contenedor = document.getElementById('image-container');
    const imagenes = document.querySelectorAll('.image');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        imagenes.forEach((imagen, index) => {
            const rect = imagen.getBoundingClientRect();
            console.log(rect);
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                imagen.style.opacity = 1;
            } else {
                imagen.style.opacity = 0;
            }
        });
    });
*/
/*
const imagenes = document.querySelectorAll('.image');

const alturaPantalla = window.innerHeight;

window.addEventListener('scroll', () => {
    imagenes.forEach((imagen, index) => {
        const rect = imagen.getBoundingClientRect();

        if (rect.top < alturaPantalla * 0.25 && rect.bottom >= alturaPantalla * 0.25) {
            imagenes.forEach((img) => img.classList.remove('active'));
            imagen.classList.add('active');
            }
    });
    
});
*/



/*
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image");
    const imageContainer = document.getElementById("image-container");

    let currentIndex = 0;

    window.addEventListener("scroll", function () {
        const containerRect = imageContainer.getBoundingClientRect();

        if (containerRect.top < window.innerHeight && currentIndex < images.length) {
            images[currentIndex].style.opacity = 1;
            currentIndex++;
        }
    });
});*/

/*
document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.querySelectorAll('.image');
    const textos = document.querySelectorAll('.text');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        imagenes.forEach((imagen, index) => {
            const rect = imagen.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                imagen.style.opacity = 1;
            } else {
                imagen.style.opacity = 0;
            }
        });

        textos.forEach((texto, index) => {
            const rect = texto.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                texto.style.opacity = 1;
            } else {
                texto.style.opacity = 0;
            }
        });
    });
});*//*
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.imagen');
    const textContainer = document.getElementById('text-container');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        // Change active image based on scroll position
        images.forEach((image, index) => {
            const rect = image.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                images.forEach((img) => img.classList.remove('active'));
                image.classList.add('active');
            }
        });

        // Check if text is in view and update image accordingly
        const rect = textContainer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            images.forEach((img) => img.classList.remove('active'));
            const activeImage = document.getElementById(`image-${getCurrentImageIndex() + 1}`);
            if (activeImage) {
                activeImage.classList.add('active');
            }
        }
    });

    // Function to get the index of the currently active image
    function getCurrentImageIndex() {
        let currentIndex = 0;
        images.forEach((image, index) => {
            if (image.classList.contains('active')) {
                currentIndex = index;
            }
        });
        return currentIndex;
    }
});*/

/*
document.addEventListener("DOMContentLoaded", function () {
    const seccion = document.querySelector(".personajes-section");
    const personajes = document.querySelectorAll(".personaje");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const seccionTop = seccion.offsetTop;
        const seccionBottom = seccionTop + seccion.offsetHeight;

        // Verificar si la sección está en la vista
        if (scrollPosition > seccionTop && scrollPosition < seccionBottom) {
            personajes.forEach((personaje) => {
                personaje.classList.add("visible");
            });
        } else {
            personajes.forEach((personaje) => {
                personaje.classList.remove("visible");
            });
        }
    });
});*/