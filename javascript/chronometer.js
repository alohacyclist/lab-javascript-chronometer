class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000)
    return callback ? callback() : this.intervalId
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
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
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
