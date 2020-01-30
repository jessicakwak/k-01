const should = require('./chai').should()
const lib = require('./lib')

describe('#010201', () => {
	it('should return array of numbers squared', () => {
		console.log(lib.toSquare([1, 2, 3]))
		console.log(lib.toSquare([5]))
		console.log(lib.toSquare([3, 'a']))
		console.log(lib.toSquare([]))
		lib.toSquare([1, 2, 3]).should.deep.equal([1, 4, 9])
		lib.toSquare([5]).should.deep.equal([25])
		lib.toSquare([3]).should.deep.equal([9])
		lib.toSquare([]).should.deep.equal([])
	})
})

describe('#010202', () => {
	it('should return single number squared', () => {
		console.log(lib.toSquare(1))
		console.log(lib.toSquare(3))
		console.log(lib.toSquare('a'))
		lib.toSquare(1).should.equal(1)
		lib.toSquare(3).should.equal(9)
		lib.toSquare('a').should.deep.equal(NaN)
	})
})

describe('#010203', () => {
	it('should return A to the power of B', () => {
		console.log(lib.toPower(2, 2))
		console.log(lib.toPower(3, 4))
		console.log(lib.toPower(4, 3))
		console.log(lib.toPower('a', 2))
		lib.toPower(2, 2).should.equal(4)
		lib.toPower(3, 4).should.equal(81)
		lib.toPower(4, 3).should.equal(64)
		lib.toSquare('a', 2).should.deep.equal(NaN)
	})
})

describe('#010204', () => {
	it('should return a random number between 0 and 10', () => {
		console.log(lib.getRandom())
		lib.getRandom().should.be.within(0, 10)
	})
})

describe('#010205', () => {
	it('should return a random number between A and B', () => {
		console.log(lib.getRandom(10, 20))
		console.log(lib.getRandom(40, 45))
		lib.getRandom(10, 20).should.be.within(10, 20)
		lib.getRandom(40, 45).should.be.within(40, 45)
	})
})

describe('#010206', () => {
	it('should return the sum of all array elements', () => {
		console.log(lib.getSum([7, 3]))
		console.log(lib.getSum([21, 9, 2, 5]))
		console.log(lib.getSum([10, 'a', 5]))
		lib.getSum([7, 3]).should.equal(10)
		lib.getSum([21, 9, 2, 5]).should.equal(37)
		lib.getSum([10, 'a', 5]).should.equal(15)
	})
})

describe('#010301', () => {
	it('should return only numbers', () => {
		console.log(lib.getNumbers([1, 'a', false, 2]))
		lib.getNumbers([1, 'a', false, 2]).should.deep.equal([1, 2])
	})
})

describe('#010302', () => {
	it('should return only numbers greater than B', () => {
		console.log(lib.getGreaterThan([1, 200, 78], 50))
		console.log(lib.getGreaterThan([1, 200, 78], 90))
		lib.getGreaterThan([1, 200, 78], 50).should.deep.equal([200, 78])
		lib.getGreaterThan([1, 200, 78], 90).should.deep.equal([200])
	})
})

describe('#010303', () => {
	it('should return only strings longer than B', () => {
		console.log(lib.getGreaterThan(['hello', 'hola', 'ciao'], 4))
		console.log(lib.getGreaterThan(['red', 'blue', 'purple'], 3))
		lib.getGreaterThan(['hello', 'hola', 'ciao'], 4).should.deep.equal(['hello'])
		lib.getGreaterThan(['red', 'blue', 'purple'], 3).should.deep.equal(['blue', 'purple'])
	})
})

describe('#010304', () => {
	it('should return only even numbers', () => {
		console.log(lib.getEven([2, 11, 3, 6, 8]))
		lib.getEven([2, 11, 3, 6, 8]).should.deep.equal([2, 6, 8])
	})
})

describe('#010401', () => {
	it('should return an array with only keys', () => {
		console.log(lib.getKeys({ city: 'Rome', country: 'Italy' }))
		lib.getKeys({ city: 'Rome', country: 'Italy' }).should.deep.equal(['city', 'country'])
	})
})

describe('#010402', () => {
	it('should return an array with only values', () => {
		console.log(lib.getValues({ city: 'Rome', country: 'Italy' }))
		lib.getValues({ city: 'Rome', country: 'Italy' }).should.deep.equal(['Rome', 'Italy'])
	})
})

describe('#010403', () => {
	it('should return an array with only names', () => {
		console.log(lib.getNames([{ name: 'John', age: 30 }, { name: 'Emma', age: 40 }]))
		lib.getNames([{ name: 'John', age: 30 }, { name: 'Emma', age: 40 }]).should.deep.equal(['John', 'Emma'])
	})
})

describe('#010404', () => {
	it('should return an array of objects with only B', () => {
		console.log(lib.selectProperty([{ name: 'John', age: 30 }, { name: 'Emma', age: 40 }], 'name'))
		console.log(lib.selectProperty([{ name: 'John', age: 30 }, { name: 'Emma', age: 40 }], 'age'))
		lib.selectProperty([{ name: 'John', age: 30 }, { name: 'Emma', age: 40 }], 'name').should.deep.equal([{ name: 'John' }, { name: 'Emma' }])
		lib.selectProperty([{ name: 'John', age: 30 }, { name: 'Emma', age: 40 }], 'age').should.deep.equal([{ age: 30 }, { age: 40 }])
	})
})

describe('#010405', () => {
	it('should return an array of objects without B', () => {
		console.log(lib.deleteProperty([{ name: 'John', age: 30 }, { name: 'Emma', age: 40 }], 'name'))
		console.log(lib.deleteProperty([{ name: 'John', age: 30 }, { name: 'Emma', age: 40 }], 'age'))
		lib.deleteProperty([{ name: 'John', age: 30 }, { name: 'Emma', age: 40 }], 'name').should.deep.equal([{ age: 30 }, { age: 40 }])
		lib.deleteProperty([{ name: 'John', age: 30 }, { name: 'Emma', age: 40 }], 'age').should.deep.equal([{ name: 'John' }, { name: 'Emma' }])
	})
})

describe('#010406', () => {
	it('should return an array of objects combining A and B', () => {
		console.log(lib.merge([{ name: 'John' }, { name: 'Emma' }], [{ age: 30 }, { age: 40 }]))
		lib
			.merge([{ name: 'John' }, { name: 'Emma' }], [{ age: 30 }, { age: 40 }])
			.should.deep.equal([{ name: 'John', age: 30 }, { name: 'Emma', age: 40 }])
	})
})

describe('#010501', () => {
	it('should return a new string with each word in A reversed', () => {
		console.log(lib.flipWords('JavaScript is the Best'))
		lib.flipWords('JavaScript is the Best').should.equal('Best the is JavaScript')
	})
})

describe('#010502', () => {
	it('should return a new array of only elements containing B', () => {
		console.log(lib.search(['New York', 'New Zealand', 'Iceland'], 'New'))
		console.log(lib.search(['New York', 'New Zealand', 'Iceland'], 'land'))
		lib.search(['New York', 'New Zealand', 'Iceland'], 'New').should.deep.equal(['New York', 'New Zealand'])
		lib.search(['New York', 'New Zealand', 'Iceland'], 'land').should.deep.equal(['New Zealand', 'Iceland'])
	})
})
