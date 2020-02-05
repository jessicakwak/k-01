module.exports = {
	toSquare: data => {
		return typeof data == 'object' ? data.filter(e => typeof e == 'number').map(e => e * e) : typeof data == 'number' ? data * data : NaN
	},
	toPower: (a, b) => {
		return typeof a == 'number' && typeof b == 'number' ? Math.pow(a, b) : NaN
	},
	getRandom: (a = 1, b = 10) => {
		return Math.random() * (b - a) + a
	},
	getSum: arr => {
		return arr.filter(e => typeof e == 'number').reduce((t, i) => t + i)
	},
	getNumbers: arr => {
		return arr.filter(e => typeof e == 'number')
	}
}
