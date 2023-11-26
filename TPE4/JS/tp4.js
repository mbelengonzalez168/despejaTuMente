"use strict";

/*---------------------------MINI-HEADER--------------------*/

const header = document.getElementById('main-header');
const logo = document.querySelector("#conteiner-logo");
const fijo  = document.getElementById('container-mini-header');
const  altura = document.querySelector('.altura');
//const miniLogo = document.querySelector(".logo-mini");

logo.style.transform = 'translateY(91px)';
    

document.addEventListener("scroll", () => {
    const scaleValue = 1 - window.scrollY / 200;
    const clampedScaleValue = Math.min(Math.max(scaleValue, .23), 1);
    const maxTranslation = 80;
    const translateY = Math.min((window.scrollY / 200) * maxTranslation, maxTranslation);
    const translateX = Math.min((window.scrollY / 200) * maxTranslation, maxTranslation);
    
    if (window.scrollY < 50) {
        logo.style.transform = 'translateY(91px)';
    }
    if (window.scrollY > 50) {
        header.classList.add('mini');
        fijo.classList.add('header-mini');
        altura.style.height=  '115px';
        logo.style.transition = `transform 0.5s ease-out`;
        logo.style.transform = `scale(${clampedScaleValue}) translateY(-${translateY}px) translateX(${translateX*4}px)`;

    } else {
         header.classList.remove('mini');
         fijo.classList.remove('header-mini');
         altura.style.height=  '0px';
    }

    });


/*---------------------opcional 4 parallax 2-----------*/   
const personaje = document.getElementById('personaje');
const mujer = document.getElementById('mujer');
const hulk = document.getElementById('hulk');
        
    personaje.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(0.8)';
            this.style.transition= `transform 0.5s ease-in-out`;
            console.log("laaa");
          });
    personaje.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
          });
    mujer.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-10px) translateX(-10px)';
            this.style.transition= `transform 0.5s ease-in-out`;
            console.log("laaa");
          });
    mujer.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
          });
          hulk.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.) translateY(-10px)';
            this.style.transition= `transform 0.5s ease-in-out`;
            console.log("laaa");
          });
          hulk.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(10px)';
          });
                
          
           
window.onscroll = function () {
    scrollFunction();
  }
  
  function scrollFunction() {
    let scrollY = window.scrollY;

/*---------------------------MINI-HEADER--------------------*/
     /*  const header = document.getElementById('main-header');
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
                
            }*/

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
    const velocidadDuende = 0.175;
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
        if (scrollY > 4850) {
            clean();
            document.querySelector("#blog-img4").classList.add("img-visible");
            document.querySelector("#text-4").classList.add("text-visible");
            }
        }

/*----------------------Pto 9-TRES PERSONAJES EN EDIFICIO-------------------------*/
    const seccion = document.querySelector(".poligono-trio-imagenes");
    const cards = document.querySelectorAll(".imagen-texto");
    const img1 = document.getElementById('card1');
    const img2 = document.getElementById('card2');
    const img3 = document.getElementById('card3');

        // Verificar si la sección está en la vista
        if (scrollY < 850){
            cards.forEach((card) => {
                card.classList.remove("visible");     
            });
            cards.forEach((card) => {
                card.style.transform = `translateY(600px)`;
            });
        }
        else if (scrollY >= 1200) {     
            cards.forEach((card) => {
                card.classList.add("visible");
            });
            img1.style.transform = `translateY(-600px)`;
            img1.style.transition = `transform 1s`;
            img2.style.transform = `translateY(-600px)`;
            img2.style.transition = `transform 2s`;
            img3.style.transform = `translateY(-600px)`;
            img3.style.transition = `transform 3s`;
        }
   
    /*--------------------Pto 11 GHOST SPIDER- 3 cards ----------------*/

    const ghost = document.querySelector(".ghost");
    const testImages = document.querySelectorAll(".test img");
    const pos = ghost.getBoundingClientRect(); //devuelve la posicion

    window.addEventListener("scroll", function () {                        
       if (pos.top < window.innerHeight && pos.bottom > 0) {
            testImages.forEach((image, index) => {
                const delay = index * 100; // Ajusta según sea necesario
                const speed = 0.2 * (index + 1)
                const translateY = Math.min(ghostHeigth, scrollY - ghostTop) * speed;
                image.style.transitionDelay = `${delay}ms`;
                image.style.transform = `translateY(${translateY}px)`;
                
                             
            });
        } 
    });    

}
