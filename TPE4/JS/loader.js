document.addEventListener("DOMContentLoaded", function () {
    const loaderContainer = document.getElementById("loader-container");
    const loadingProgress = document.getElementById("loading-progress");

    let percentage = 50;

    const updatePercentage = () => {
        loadingProgress.textContent = percentage + "%";
        
    };

    const incrementPercentage = () => {
        if (percentage < 100) {
            percentage += 1;
            updatePercentage();
            setTimeout(incrementPercentage, 50); 
            
        } else {
            // Oculta el loader después de que el porcentaje llega al 100%
            setTimeout(function () {
                loaderContainer.style.display = "none";
            }, 60); // Ajusta el tiempo según sea necesario
        }
    };

    // Inicia la simulación
    incrementPercentage();
});