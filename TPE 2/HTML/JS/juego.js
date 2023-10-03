const loadingContainer = document.getElementById('loading-container');
const logo = document.getElementById('logo');
const loadingTimer = document.getElementById('loading-timer'); 

logo.addEventListener('click', function () {
    showLoading();
    simulateLoading();
});
function showLoading() {

loadingContainer.style.display = 'block';
}

function simulateLoading() {
let seconds = 5;
const countdownInterval = setInterval(function () {
  seconds--;
  if (seconds < 0) {
      clearInterval(countdownInterval);
      window.location.href = 'home.html';
  } else {
      loadingTimer.textContent = seconds;
  }
}, 1000);
};