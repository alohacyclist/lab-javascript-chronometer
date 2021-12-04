class Chronometer {
  constructor() {
    this.currentTime = 1
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
     if (callback) callback()
      console.log(this.currentTime)
      this.currentTime++}, 1000)

  }

  getMinutes() {
    let minutes = this.currentTime / 60
    return Math.floor(minutes)
  }

  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    return value > 9  ? `${value}` : `0${value}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let splitMin = this.computeTwoDigitNumber(this.getMinutes())
    let splitSec = this.computeTwoDigitNumber(this.getSeconds())
    return `${splitMin}:${splitSec}`  
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
