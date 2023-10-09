"use stric"

/*Header*/
/*usuario*/
document.getElementById('usuario').addEventListener('click', function () {
    document.getElementById('popup-compras').style.display = 'none';
    document.getElementById('popup-login').style.display = 'block';
    document.body.classList.add("popup-open");
});

document.getElementById('btn-cerrar-popup-login').addEventListener('click', function () {
    document.getElementById('popup-login').style.display = 'none';
    document.body.classList.remove("popup-open");
  });

/*Compras*/
document.getElementById('pop-bolsa').addEventListener('click', function () {
    document.getElementById('popup-login').style.display = 'none';
    document.getElementById('popup-compras').style.display = 'block';
    document.body.classList.add("popup-open");
  });

document.getElementById('btn-cerrar-popup-compras').addEventListener('click', function () {
    document.getElementById('popup-compras').style.display = 'none';
    document.body.classList.remove("popup-open");
});

/*Compartir*/
document.getElementById('icono-compartir').addEventListener('click', function () {
    document.getElementById('popup-compartir').style.display = 'block';
    document.body.classList.add("popup-open");
  });

  document.getElementById('btn-cerrar-popup-compartir').addEventListener('click', function () {
    document.getElementById('popup-compartir').style.display = 'none';
    document.body.classList.remove("popup-open");
  });

  /*formulario-inicio*/
  document.getElementById('inicio').addEventListener('click', function () {
    document.getElementById('form-inicio').style.display = 'block';
    document.body.classList.add("popup-open");
  });
  
  /*formulario-registrarse*/
  document.getElementById('registrarse').addEventListener('click', function () {
    document.getElementById('form-registrarse').style.display = 'block';
    document.body.classList.remove("popup-open");
  });



