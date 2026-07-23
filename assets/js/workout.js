/*global document, setInterval, clearInterval*/

const btnStart = document.querySelector(".st");
const btnReset = document.querySelector(".rs");
const btnLap = document.querySelector(".lps");
const btnStop = document.querySelector(".stp");

const hrsBox = document.querySelector(".hrs");
const minBox = document.querySelector(".min");
const secBox = document.querySelector(".sec");
const msBox = document.querySelector(".ms");

const lapContainer = document.querySelector(".laps");

let hrs = 0;
let min = 0;
let sec = 0;
let ms = 0;

let startTimer = null;
let running = false;

// Format time
const format = function (num) {
  if (num < 10) {
    return "0" + num;
  }

  return num;
};

// Update display
const updateDisplay = function () {
  hrsBox.innerText = format(hrs);
  minBox.innerText = format(min);
  secBox.innerText = format(sec);
  msBox.innerText = format(ms);
};

if (
  btnStart &&
  btnReset &&
  btnLap &&
  btnStop &&
  hrsBox &&
  minBox &&
  secBox &&
  msBox &&
  lapContainer
) {
  // Start timer
  btnStart.addEventListener("click", function () {
    if (startTimer !== null) {
      return;
    }

    running = true;

    startTimer = setInterval(function () {
      ms += 1;

      if (ms === 100) {
        ms = 0;
        sec += 1;
      }

      if (sec === 60) {
        sec = 0;
        min += 1;
      }

      if (min === 60) {
        min = 0;
        hrs += 1;
      }

      updateDisplay();
    }, 10);
  });

  // Stop / pause timer
  btnStop.addEventListener("click", function () {
    clearInterval(startTimer);
    startTimer = null;
    running = false;
  });

  // Reset timer
  btnReset.addEventListener("click", function () {
    clearInterval(startTimer);
    startTimer = null;
    running = false;

    hrs = 0;
    min = 0;
    sec = 0;
    ms = 0;

    updateDisplay();
    lapContainer.innerHTML = "";
  });

  // Lap timer
  btnLap.addEventListener("click", function () {
    if (!running) {
      return;
    }

    const lapTime = [format(hrs), format(min), format(sec), format(ms)].join(
      ":",
    );

    const lap = document.createElement("div");
    lap.classList.add("lap");
    lap.innerText = lapTime;

    lapContainer.prepend(lap);
  });
}
