document.getElementById('inicio').addEventListener('click', function () {
    document.getElementById('container-form-inicio-sesion').style.display = 'block';
   
  });

  document.getElementById('form').addEventListener("submit", function(event) {
    event.preventDefault();
  });

  document.getElementById('btn-iniciar-sesion').addEventListener('click', function () {
    document.getElementById('container-form-inicio-sesion').style.display = 'none';
    document.getElementById('mensajeExito').style.display = 'block';

    
  });
  document.getElementById('registrarse').addEventListener('click', function () {
    document.getElementById('container-form-registrarse').style.display = 'block';
});
document.getElementById('btn-registrarse').addEventListener('click', function () {
    document.getElementById('container-form-registrarse').style.display = 'none';
    document.getElementById('mensajeExito').style.display = 'block';

    
  });