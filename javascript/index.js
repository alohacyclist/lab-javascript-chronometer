const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
}

function printSeconds() {
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
}

function resetTime() {
  minUniElement.innerHTML = "0";
  minDecElement.innerHTML = "0";
  secUniElement.innerHTML = "0";
  secDecElement.innerHTML = "0";
  chronometer.reset();
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitTime = document.createElement("li");
  splitTime.innerHTML = chronometer.split();
  splitsElement.append(splitTime)
}

function clearSplits() {
  splitsElement.innerHTML = "";
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

btnLeftElement.classList.toggle('stop')
btnLeftElement.classList.toggle('start')
btnRightElement.classList.toggle('split')
btnRightElement.classList.toggle('reset')

if (btnLeftElement.className != 'btn start') btnLeftElement.innerHTML = 'STOP', chronometer.start(printSeconds);
else btnLeftElement.innerHTML = 'START', chronometer.stop();

if (btnRightElement.className != 'btn reset') btnRightElement.innerHTML = 'SPLIT'
else btnRightElement.innerHTML = 'RESET'

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === "SPLIT") printSplit();
  if (btnRightElement.innerHTML === "RESET") {
    clearSplits();
    resetTime();
  }
});