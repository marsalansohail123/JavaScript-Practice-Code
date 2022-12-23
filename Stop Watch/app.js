var dMin = document.getElementById("displayMin");
var dSec = document.getElementById("displaySec");
var dMiliSec = document.getElementById("displayMiliSec");

var min = 0;
var sec = 0;
var miliSec = 0;

var interval;

function startTimer() {
    miliSec++;
    if (miliSec == 10) {
        miliSec = 0
        sec++;
    }
    if (sec == 60) {
        sec = 0;
        min++;
    }
    dMin.innerHTML = min;
    dSec.innerHTML = sec;
    dMiliSec.innerHTML = miliSec;
}

function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {
    alert("Timer Reset Successfully!!")
    pauseTimer();
    min = 0;
    sec = 0;
    miliSec = 0;
    dMin.innerHTML = min;
    dSec.innerHTML = sec;
    dMiliSec.innerHTML = miliSec;
}

function play() {
    interval = setInterval(function () {
        startTimer();
    }, 100)
}