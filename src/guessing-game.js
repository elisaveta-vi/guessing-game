class GuessingGame {
	constructor() { }

	setRange(min, max) {
		this.min = min;
		this.max = max;
	}

	guess() {
		return GuessingGame.number = Math.round((this.min + this.max) / 2);
	}

	lower() {
		return this.max = GuessingGame.number;
	}

	greater() {
		return this.min = GuessingGame.number;
	}
}

module.exports = GuessingGame;
