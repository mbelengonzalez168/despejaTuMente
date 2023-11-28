"use strict";
/*-------------------------Pto 5--HEADER-MINI-LOGO------------------*/

const header = document.getElementById('main-header');
const logo = document.querySelector("#conteiner-logo");
const fijo  = document.getElementById('container-mini-header');
const  altura = document.querySelector('.altura');
    //posiciono el logo
    logo.style.transform = 'translateY(91px)';
    
    //escala basado en el desplazamiento vertical  
    document.addEventListener("scroll", () => {
        const scaleValue = 1 - window.scrollY / 400;
        const clampedScaleValue = Math.min(Math.max(scaleValue, .23), 1);
        const translateY = Math.min((window.scrollY / 400) * 82);
        
        if (window.scrollY < 50) {
            logo.style.transform = 'translateY(91px)';//mantengo posicion en scroll menor a 50
        }
        if (window.scrollY > 50) {//si scroll mayor a 50 escalo a mini logo 
            header.classList.add('mini');
            fijo.classList.add('header-mini');
            altura.style.height=  '115px';
            logo.style.transition = `transform .5s ease-out`;
            logo.style.transform = `scale(${clampedScaleValue}) translateY(-${translateY}px)`;

        } else {
            header.classList.remove('mini');// si no hay scroll solo se ve logo grande
            fijo.classList.remove('header-mini');
            altura.style.height=  '0px';
        }

    });

/*---------------------Pto 7---PARALLAX- INICIO--------------------*/

const Edif1 = document.querySelector(".edifIzquierda");
const Edif2 = document.querySelector(".edifMedio");
const Edif3 = document.querySelector(".edifDerecha");
const Pje1 = document.querySelector(".spider1");
const Pje2 = document.querySelector(".spider2");
const Pje3 = document.querySelector(".spider3");
const telaD = document.querySelector(".telaDer");
const telaI = document.querySelector(".telaIzq");
const elementos = [Edif1, Edif2, Edif3, Pje1, Pje2, Pje3, telaD, telaI, logo];
    
//termina el loader y se hacen visibles los elementos 
    elementos.forEach((e) => {
        e.classList.remove("oculto");
    });

    document.addEventListener("scroll", () => {
        elementos.forEach((e) => {
        e.style.transition = "none";
        });
        Edif1.style.transform = `translateX(${-window.scrollY * 0.3}px)`;
        Edif2.style.transform = `scale(${1 + window.scrollY * 0.0008})`;
        Edif3.style.transform = `translateX(${window.scrollY * 0.3}px)`;

        Pje1.style.transform = `translateY(${-window.scrollY * 0.5}px) translateX(${-window.scrollY * 0.3}px)`;
        Pje3.style.transform = `translateY(${-window.scrollY * 0.5}px) translateX(${window.scrollY * 0.5}px)`; 
        telaD.style.transform = `translateY(${-window.scrollY * 0.5}px) translateX(${window.scrollY * 0.5}px) rotate(-114.597deg)`;
        Pje2.style.transform = `translateY(${-window.scrollY * 0.8}px)`;
        telaI.style.transform = `translateY(${-window.scrollY * 0.8}px) rotate(65.403deg)`;
    });

/*------------------------Pto 8- Opcional 4---PARALLAX-2 --------------------*/

const personaje = document.getElementById('personaje');
const mujer = document.getElementById('mujer');
const hulk = document.getElementById('hulk');
        
    personaje.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(0.8)';
            this.style.transition= `transform 0.5s ease-in-out`;
        });
    personaje.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    mujer.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-10px) translateX(-10px)';
            this.style.transition= `transform 0.5s ease-in-out`;
        });
    mujer.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    hulk.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.) translateY(-10px)';
        });
    hulk.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(10px)';
     });
                
               
    window.onscroll = function () {
        scrollFunction();
    }
    
    function scrollFunction() {
        let scrollY = window.scrollY;

/*------------------Pto 6--DUENDE-VERDE---------------------*/

const duendeVerde = document.getElementById('duende-verde');
const velocidadDuende = 0.175;
const transformValue = `translateY(${scrollY * velocidadDuende}px) scaleX(-1)`;
    duendeVerde.style.transform = transformValue;

/*----------------Pto 4  MAS AMIGOS--------------------------*/
    if (scrollY){
        function remuve() {
        document.querySelectorAll(".img").forEach((s) => {
        s.classList.remove("img-visible");
        });
        document.querySelectorAll(".text").forEach((s) => {
        s.classList.remove("text-visible");
        });
        }
        if (scrollY < 4080) {
            remuve();
            document.querySelector("#blog-img1").classList.add("img-visible");
            document.querySelector("#text-1").classList.add("text-visible");
            }
        if (scrollY > 4080 && window.screenY < 4450) {
            remuve();
            document.querySelector("#blog-img2").classList.add("img-visible");
            document.querySelector("#text-2").classList.add("text-visible");
            }
        if (scrollY > 4450 && window.screenY < 4850) {
            remuve();
            document.querySelector("#blog-img3").classList.add("img-visible");
            document.querySelector("#text-3").classList.add("text-visible");
            }
        if (scrollY > 4850) {
            remuve();
            document.querySelector("#blog-img4").classList.add("img-visible");
            document.querySelector("#text-4").classList.add("text-visible");
            }
        }

/*--------------------Pto 11 GHOST SPIDER- 3 cards ----------------*/

const ghost = document.querySelector(".ghost");
const Img1 = document.querySelector(".test-1");
const Img2 = document.querySelector(".test-2"); 
const Img3 = document.querySelector(".test-3");     
const testImages = [Img1, Img2, Img3];
const ghostTop = ghost.offsetTop;
const ghostHeigth = ghost.offsetHeight;
   
     if (scrollY > ghostTop  && scrollY < ghostTop + 150) {
            testImages.forEach((image, index) => {
                const delay = index * 100; // Ajusta según sea necesario
                const speed = 0.2 * (index + 1)
                const translateY = Math.min(ghostHeigth, scrollY - ghostTop) * speed;
                image.style.transitionDelay = `${delay}ms`;
                image.style.transform = `translateY(${translateY}px)`;
                          
            });
        }

/*----------------------Pto 9-TRES CARDS-------------------------*/
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
 

}
