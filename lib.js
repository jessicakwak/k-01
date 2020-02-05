module.exports = {
	toSquare: data => {
		return data.filter(e => typeof e == 'number').map(e => e * e)
	}
}
