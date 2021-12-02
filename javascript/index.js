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
  
}

function printMinutes() {
  
}

function printSeconds() {
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const splitParent = document.getElementById('splits')
  const newSplit = document.createElement('li')
  splitParent.appendChild(newSplit)
  console.log(splitParent)
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

btnLeftElement.classList.toggle('stop')
btnRightElement.classList.toggle('split')

if (btnLeftElement.className != 'btn start') btnLeftElement.innerHTML = 'STOP', chronometer.start();
else btnLeftElement.innerHTML = 'START', chronometer.stop();

if (btnRightElement.className != 'btn reset') btnRightElement.innerHTML = 'SPLIT'
else btnRightElement.innerHTML = 'RESET'

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  if (btnRightElement.className == 'btn reset split') chronometer.split(), this.printSplit()
  if (btnRightElement.className == 'btn reset') btnRightElement.addEventListener('click', () =>
  console.log(chronometer.reset()))
});