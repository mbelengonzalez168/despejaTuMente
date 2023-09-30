
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

  imagenes = document.querySelectorAll(".imagen-pasos");
  document.getElementById('paso1').addEventListener('click', mostrarImagen(1));
  document.getElementById('paso2').addEventListener('click', mostrarImagen(2));
  document.getElementById('paso3').addEventListener('click', mostrarImagen(3));
  document.getElementById('paso4').addEventListener('click', mostrarImagen(4));
  
  function mostrarImagen(index) {
      for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = 'none';
      }
      imagenes[index - 1].style.display = 'block';
  }
  
  mostrarImagen(1);

  



