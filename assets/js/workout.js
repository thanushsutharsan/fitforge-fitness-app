const btnStart = document.querySelector('.st');
const btnReset = document.querySelector('.rs');
const btnLap = document.querySelector('.lps');
const btnStop = document.querySelector('.stp');

const hrsBox = document.querySelector('.hrs');
const minBox = document.querySelector('.min');
const secBox = document.querySelector('.sec');
const msBox = document.querySelector('.ms');

const lapContainer = document.querySelector('.laps');
let hrs = 0;
let min = 0;
let sec = 0;
let ms = 0;

let startTimer = null;
let running = false;

// start 
btnStart.addEventListener('click', () => {

  if (startTimer !== null) return; 

  running = true;

  startTimer = setInterval(() => {

    ms++;
    if (ms === 100) {
      ms = 0;
      sec++;
    }
    if (sec === 60) {
      sec = 0;
      min++;
    }
    if (min === 60) {
      min = 0;
      hrs++;
    }
    updateDisplay();
  }, 10);
});

// stop/ pause
btnStop.addEventListener('click', () => {
  clearInterval(startTimer);
  startTimer = null;
  running = false;
});

// reset
btnReset.addEventListener('click', () => {
  clearInterval(startTimer);
  startTimer = null;
  running = false;
  hrs = 0;
  min = 0;
  sec = 0;
  ms = 0;

  updateDisplay();
  lapContainer.innerHTML = '';
});

// lap
btnLap.addEventListener('click', () => {
  if (!running) return;
  const lapTime =
    `${format(hrs)}:${format(min)}:${format(sec)}:${format(ms)}`;

  const lap = document.createElement('div');
  lap.classList.add('lap');
  lap.innerText = lapTime;

  lapContainer.prepend(lap);
});
// format time
function format(num) {
  return num < 10 ? '0' + num : num;
}
// display update 
function updateDisplay() {
  hrsBox.innerText = format(hrs);
  minBox.innerText = format(min);
  secBox.innerText = format(sec);
  msBox.innerText = format(ms);
}