"use strict";

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
                    window.location.href = './entrega4.html';
                }, 60); // Ajusta el tiempo según sea necesario
            }
        };
    
        // Inicia la simulación
        incrementPercentage();
    });


  /*
document.addEventListener("DOMContentLoaded", function () {
     const loadingProgress = document.getElementById("loading-progress");

    // Verificar si la simulación ya se ha completado en esta sesión
    const simulationDone = sessionStorage.getItem("loadingSimulationDone");

        if (!simulationDone) {
        // Si la simulación aún no se ha completado, iniciarla
            let percentage = 20;
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
                           sessionStorage.setItem("loadingSimulationDone", "true");
                            window.location.href = './entrega4.html';
                        }, 60); 
                    }
                };

           // Inicia la simulación
           incrementPercentage();
        } else {
        // Si la simulación ya se completó en esta sesión, redirige inmediatamente
            window.location.href = './entrega4.html';
        }
    });
            */
