class GuessingGame {
    constructor() {var min_temp, max_temp, middle_temp;}

    setRange(min, max) {
        this.min_temp = min;
        this.max_temp = max;
    }

    guess() {return (this.middle_temp = Math.round((this.min_temp + this.max_temp) / 2));}

    lower() {return (this.max_temp = this.middle_temp);}

    greater() {return (this.min_temp = this.middle_temp);}

}
module.exports = GuessingGame;
