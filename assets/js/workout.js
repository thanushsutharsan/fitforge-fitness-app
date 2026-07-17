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