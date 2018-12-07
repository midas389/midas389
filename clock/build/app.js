class ClockDisplay {
    constuctor(hours, minutes) {
        this.hours = hours;
        this.minutes = minutes;
    }
    tick() {
        this.minutes.increment();
        if (this.minutes.getValue() == 0) {
            this.hours.increment();
        }
    }
    getTime() {
        return `${this.hours.getValue()} : ${this.minutes.getValue()}`;
    }
}
class Clock {
    constructor(hours, minutes, maxHours, maxMinutes = 59) {
        this.hours = hours;
        this.minutes = minutes;
        this.maxHours = maxHours;
        this.maxMinutes = maxMinutes;
    }
    getHours() {
        return this.hours;
    }
    getMinutes() {
        return this.minutes;
    }
    addTime() {
        if (this.minutes === this.maxMinutes) {
            this.minutes = 0;
            if (this.hours === this.maxHours) {
                this.hours = 0;
            }
            else {
                this.hours++;
            }
        }
        else {
            this.minutes++;
        }
    }
    getTime() {
        if (this.minutes < 10) {
            return `${this.hours}:0${this.minutes}`;
        }
        return `${this.hours}:${this.minutes}`;
    }
}
let clock = new ClockDisplay();
for (let i = 0; i < 500; i++) {
    console.log(clock.getTime());
    clock.tick();
}
class numberDisplay {
    constuctor(value, limit) {
        this.value = value;
        this.limit = limit;
    }
    increment() {
        if (this.value == this.limit) {
            this.value = 0;
        }
        else {
            this.value++;
        }
    }
    getValue() {
        return this.value;
    }
}
//# sourceMappingURL=app.js.map