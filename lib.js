module.exports = {
	toSquare: data => {
		return typeof data == 'object' ? data.filter(e => typeof e == 'number').map(e => e * e) : typeof data == 'number' ? data * data : NaN
	},
	toPower: (a, b) => {
		return typeof a == 'number' && typeof b == 'number' ? Math.pow(a, b) : NaN
	}
}
