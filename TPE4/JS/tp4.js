"use strict";

const menuBurger = document.querySelector('.menu-hamburguesa');
const itemsMenu = document.querySelector('#main-header .items-menu');


/*Accion del menu hamburguesa*/
    menuBurger.addEventListener('click', e => {       
        menuBurger.classList.toggle('active');
        itemsMenu.classList.toggle('open');       
    });

    
window.onscroll = function () {
    scrollFunction();
  }
  
  function scrollFunction() {
    let scrollY = window.scrollY;

/*---------------------------MINI-HEADER--------------------*/
const header = document.getElementById('main-header');
const logo = document.getElementById('logo');
const fijo  = document.getElementById('container-mini-header');
const  altura = document.querySelector('.altura');

    if (scrollY > 50) {
        header.classList.add('mini');
        altura.style.height=  '115px';
        logo.classList.add('logo-mini');
        fijo.classList.add('header-mini');

    } else {
        header.classList.remove('mini');
        logo.classList.remove('logo-mini');
        fijo.classList.remove('header-mini');
        altura.style.height=  '0px';
        
    }

    /*------------------PARALLAX--------------------*/

    const Edif1 = document.querySelector(".edifIzquierda");
    const Edif2 = document.querySelector(".edifMedio");
    const Edif3 = document.querySelector(".edifDerecha");
    const Pje1 = document.querySelector(".spider1");
    const Pje2 = document.querySelector(".spider2");
    const Pje3 = document.querySelector(".spider3");
    const telaD = document.querySelector(".telaDer");
    const telaI = document.querySelector(".telaIzq");
    const elementos = [Edif1, Edif2, Edif3, Pje1, Pje2, Pje3, telaD, telaI];
    
    elementos.forEach((e) => {
        e.classList.remove("oculto");
        
    });

    if (scrollY) {
        elementos.forEach((e) => {
        e.style.transition = "none";
        });
        Edif1.style.transform = `translateX(${-window.scrollY * 0.002}px)`;
        Edif2.style.transform = `scale(${1 + window.scrollY * 0.0008})`;
        Edif3.style.transform = `translateX(${window.scrollY * 0.002}px)`;

        Pje1.style.transform = `translateY(${-window.scrollY * 0.5}px) translateX(${
            -window.scrollY * 0.5
        }px)`;

        Pje3.style.transform = `translateY(${-window.scrollY * 0.5}px) translateX(${
            window.scrollY * 0.5
        }px)`;
        telaD.style.transform = `translateY(${-window.scrollY * 0.5}px) translateX(${
            window.scrollY * 0.5
        }px) rotate(-114.597deg)`;

        Pje2.style.transform = `translateY(${-window.scrollY * 0.8}px)`;
        telaI.style.transform = `translateY(${
            -window.scrollY * 0.8
        }px) rotate(65.403deg)`;
    };

/*--------------------DUENDE-VERDE--------------------*/
    const duendeVerde = document.getElementById('duende-verde');
    const velocidadDuende = 0.12;
    const transformValue = `translateY(${scrollY * velocidadDuende}px) scaleX(-1)`;
    duendeVerde.style.transform = transformValue;

/*----------------Pto 7  MAS AMIGOS----------------------------*/
    if (scrollY){
        function clean() {
        document.querySelectorAll(".img").forEach((s) => {
        s.classList.remove("img-visible");
        });
        document.querySelectorAll(".text").forEach((s) => {
        s.classList.remove("text-visible");
        });
        }
        if (scrollY < 4080) {
            clean();
            document.querySelector("#blog-img1").classList.add("img-visible");
            document.querySelector("#text-1").classList.add("text-visible");
            }
        if (scrollY > 4080 && window.screenY < 4450) {
            clean();
            document.querySelector("#blog-img2").classList.add("img-visible");
            document.querySelector("#text-2").classList.add("text-visible");
            }
        if (scrollY > 4450 && window.screenY < 4850) {
            clean();
            document.querySelector("#blog-img3").classList.add("img-visible");
            document.querySelector("#text-3").classList.add("text-visible");
            }
        if (scrollY > 450) {
            clean();
            document.querySelector("#blog-img4").classList.add("img-visible");
            document.querySelector("#text-4").classList.add("text-visible");
            }
        }

/*----------------------Pto 9-TRES PERSONAJES EN EDIFICIO-------------------------*/
    const seccion = document.querySelector(".personajes-section");
    const personajes = document.querySelectorAll(".personaje");
    const personaje1 = document.getElementById('pje1');
    const personaje2 = document.getElementById('pje2');
    const personaje3 = document.getElementById('pje3');
    const seccionTop = seccion.offsetTop;
    const seccionBottom = seccionTop + seccion.offsetHeight;

        // Verificar si la sección está en la vista
        if (scrollY > seccionTop && scrollY < seccionBottom) {     
            personaje1.classList.add("visible");  
            personaje2.classList.add("visible");  
            personaje3.classList.add("visible");  

            personaje1.style.transition = `transform 2s`;
            personaje2.style.transition = `transform 3s`;
            personaje3.style.transition = `transform 4s`;

            personaje1.style.transform = `translateY(-70px)`;
            personaje2.style.transform = `translateY(-160px)`;
            personaje3.style.transform = `translateY(-240px)`;
        } else {
            personajes.forEach((personaje) => {
                personaje.classList.remove("visible");
            });
            personaje1.style.transform = `translateY(70px)`;
            personaje2.style.transform = `translateY(160px)`;
            personaje3.style.transform = `translateY(240px)`;
        }
   
    /*--------------------Pto 11 GHOST SPIDER- 3 cards ----------------*/

    const ghost = document.querySelector(".ghost");
    const testImages = document.querySelectorAll(".test img");
    const ghostTop = ghost.offsetTop;
    const ghostHeigth = ghost.offsetHeight;

                             
        if (scrollY > ghostTop - 150 && scrollY < ghostTop + 150) {
            testImages.forEach((image, index) => {
                const delay = index * 100; // Ajusta según sea necesario
                const speed = 0.2 * (index + 1)
                const translateY = Math.min(ghostHeigth, scrollY - ghostTop) * speed;
                image.style.transitionDelay = `${delay}ms`;
                image.style.transform = `translateY(${translateY}px)`;
                
                image.addEventListener("mouseenter", function () {
                    // Agrega la animación y otras reglas de estilo al hacer hover
                    image.style.animation = "rotateAndPerspective 1s infinite ";
                });
        
                image.addEventListener("mouseleave", function () {
                    // Elimina la animación al quitar el cursor
                    image.style.animation = "none";
                });
                
            });
        } 
  


}
