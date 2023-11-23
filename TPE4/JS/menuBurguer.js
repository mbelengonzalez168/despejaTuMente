"use strict";

const menuBurger = document.querySelector('.menu-hamburguesa');
const itemsMenu = document.querySelector('#main-header .items-menu');
/*

/*Accion del menu hamburguesa*/
menuBurger.addEventListener('click', e => {       
    menuBurger.classList.toggle('active');
    itemsMenu.classList.toggle('open');  
    if(itemsMenu.classList.contains('open')){
        itemsMenu.style.transform = 'translateX(100px)';
        itemsMenu.style.transition = 'transform 1s ease-out';
    }
    else {
        itemsMenu.style.transform = 'translateX(-100px)';
        itemsMenu.style.transition = 'transform 1s ease-out'; 
    }
        
});


/*---------------------------MINI-HEADER--------------------*/

const header = document.getElementById('main-header');
const logo = document.querySelector("#conteiner-logo");
const fijo  = document.getElementById('container-mini-header');
const  altura = document.querySelector('.altura');
const miniLogo = document.querySelector(".logo-mini");
    

document.addEventListener("scroll", () => {
    if (window.scrollY < 50) {
        miniLogo.style.opacity = 0;
    }
    if (window.scrollY > 50) {
        header.classList.add('mini');
        fijo.classList.add('header-mini');
        altura.style.height=  '115px';
        miniLogo.style.opacity = window.scrollY / 400;
        logo.style.opacity = 1 - window.scrollY / 200;
    logo.style.scale = 1 - window.scrollY / 200;
        
    } else {
         header.classList.remove('mini');
         fijo.classList.remove('header-mini');
         altura.style.height=  '0px';
         logo.style.opacity = 1 - window.scrollY / 200;
    logo.style.scale = 1 - window.scrollY / 200;
    }
    
    });
 