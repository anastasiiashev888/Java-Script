const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  interval: null,
  startTimer() {
    this.interval = setInterval(() => {
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
      if (this.secondsPassed < 60) {
        this.secondsPassed += 1;
      }
    }, 1000);
  },

  getTime() {
    return `${this.minsPassed}:${
      this.secondsPassed < 10 ? `0${this.secondsPassed}` : this.secondsPassed
    }`;
  },
  stopTimer() {
    clearInterval(this.interval);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

/* const functionOne = timer.startTimer.bind(timer);
console.log(functionOne());

const functionTwo = timer.getTime.bind(timer);
console.log(functionTwo());

const functionThre = timer.startTimer.bind(timer);

/* console.log(timer.startTimer(), 5000);
console.log(timer.stopTimer(), 5000);
console.log(timer.resetTimer(), 5000); */ */
