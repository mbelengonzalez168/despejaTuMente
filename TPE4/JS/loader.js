"use strict";

document.addEventListener("DOMContentLoaded", function () {
     const loadingProgress = document.getElementById("loading-progress");

    // Verificar si la simulación ya se ha completado 
    const simulationDone = sessionStorage.getItem("loadingSimulationDone");

        if (!simulationDone) {
        // Si la simulación aún no se ha completado, iniciarla
            let percentage = 0;
            const updatePercentage = () => {
                   loadingProgress.textContent = percentage + "%";
                    };

            const incrementPercentage = () => {
                if (percentage < 100) {
                    percentage += 1;
                    updatePercentage();
                    setTimeout(incrementPercentage, 50);
                    } else {
                        setTimeout(function () {
                           sessionStorage.setItem("loadingSimulationDone", "true");
                            window.location.href = './entrega4.html';
                        }, 60); 
                    }
                };

           // Inicia la simulación
           incrementPercentage();
        } else {
        // Si la simulación ya se completó redirige inmediatamente
            window.location.href = './entrega4.html';
        }
    });
            

  