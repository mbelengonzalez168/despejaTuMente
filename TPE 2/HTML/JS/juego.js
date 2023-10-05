"use strict";
const logo =document.querySelector(".logo");
const loadingContainer = document.getElementById('loading-container');
const loadingProgress = document.getElementById('loading-progress');


function showLoading() {
loadingContainer.style.display = 'block';
}

function simulateLoading() {
    let percentage = 0;
    const updatePercentage = () => {
          loadingProgress.textContent = percentage + '%';
    }
    const incrementPercentage = () => {
      percentage += 1;
      updatePercentage();
    }
    const countdownInterval = setInterval(function () {
        if (percentage >= 100) {
            clearInterval(countdownInterval);
            window.location.href = 'home.html'; // Redirige una vez que se llega al 100%
        } else {
            incrementPercentage();
        }
    }, 50); 
}; 

logo.addEventListener('click', function () {
    showLoading();
    simulateLoading();
});


