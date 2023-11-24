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

