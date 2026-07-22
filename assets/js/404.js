// 404 page automatic redirect countdown

let seconds = 5;

const countdown = document.getElementById("countdown");

if (countdown) {
    const timer = setInterval(() => {
        seconds--;

        countdown.textContent = seconds;

        if (seconds === 0) {
            clearInterval(timer);
            window.location.href = "index.html";
        }
    }, 1000);
}