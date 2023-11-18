document.addEventListener("DOMContentLoaded", function () {
    // Oculta el loader después de que la página se ha cargado
    setTimeout(function () {
        document.getElementById("loader-container").style.display = "none";
    }, 2600); // Ajusta el tiempo según sea necesario

    console.log("loader");
});