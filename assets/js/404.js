/*global document, window, setInterval, clearInterval*/

// 404 page automatic redirect countdown

var seconds = 10;
var countdown = document.getElementById("countdown");
var timer;

function updateCountdown() {
  seconds = seconds - 1;

  countdown.textContent = seconds;

  if (seconds === 0) {
    clearInterval(timer);
    window.location.href = "index.html";
  }
}

if (countdown) {
  timer = setInterval(updateCountdown, 1000);
}
