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

document.getElementById('menu-categorias').addEventListener('click', function () {
   document.querySelector(".conteiner-categorias").classList.toggle("oculta");
});

document.getElementById('icono-compartir').addEventListener('click', function () {
    document.getElementById('popup-compartir').style.display = 'block';
    document.body.classList.add("popup-open");
  });
  
  
  document.getElementById('btn-cerrar-popup-compartir').addEventListener('click', function () {
    document.getElementById('popup-compartir').style.display = 'none';
    document.body.classList.remove("popup-open");
  });

  document.getElementById('usuario').addEventListener('click', function () {
    document.getElementById('popup-login').style.display = 'block';
    document.body.classList.add("popup-open");
  });
  
  
  document.getElementById('btn-cerrar-popup-login').addEventListener('click', function () {
    document.getElementById('popup-login').style.display = 'none';
    document.body.classList.remove("popup-open");
  });

  document.getElementById('pop-bolsa').addEventListener('click', function () {
    document.getElementById('popup-compras').style.display = 'block';
    document.body.classList.add("popup-open");
  });
  
  
  document.getElementById('btn-cerrar-popup-compras').addEventListener('click', function () {
    document.getElementById('popup-compras').style.display = 'none';
    document.body.classList.remove("popup-open");
  });

  document.getElementById('inicio').addEventListener('click', function () {
    document.getElementById('form-inicio').style.display = 'block';
    document.body.classList.add("popup-open");
  });
  
  
  document.getElementById('registrarse').addEventListener('click', function () {
    document.getElementById('form-registrarse').style.display = 'block';
    document.body.classList.remove("popup-open");
  });


 
  

  



