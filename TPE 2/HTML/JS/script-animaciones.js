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






 
  

  



