"use stric"

const imagenes = document.querySelectorAll(".imagen-pasos");

document.getElementById('paso1').addEventListener('click', function() {
    mostrarImagen(0);
});
document.getElementById('paso2').addEventListener('click', function() {
    mostrarImagen(1);
});
document.getElementById('paso3').addEventListener('click', function() {
    mostrarImagen(2);
});
document.getElementById('paso4').addEventListener('click', function() {
    mostrarImagen(3);
});

mostrarImagen(0);

function mostrarImagen(pos) {
  for (let i=0; i<imagenes.length; i++) {
    imagenes[i].classList.remove("visible");
    imagenes[i].classList.add("oculta");
  }
  imagenes[pos].classList.remove("oculta");
  imagenes[pos].classList.add("visible");
}


const boton = document.getElementById('play');
const fichas = document.querySelectorAll('.fichas');

boton.addEventListener('mouseenter', () => {
    fichas.forEach((ficha) => {
        // Mueve las imágenes hacia abajo en función de su índice
        ficha.style.transform = `translateY(155px)`;
        ficha.style.transition = 'transform 0.3s ease';
    });
});

boton.addEventListener('mouseleave', () => {
    // Restaura la posición original de las imágenes al quitar el hover
    fichas.forEach((ficha) => {
        ficha.style.transform = 'translateY(0)';
        ficha.style.transition = 'transform 0.3s ease';
    });
});






 
  

  



