const calculator = require('../code/calculator')

it('can add', () => {
    expect(calculator.add(1, 2)).toBe(3)
})

it('can subtract', () => {
    expect(calculator.subtract(1, 2)).toBe(-1)
})

it('can multiply', () => {
    expect(calculator.multiply(2, 4)).toBe(8)
})

it('can divide', () => {
    expect(calculator.divide(4, 2)).toBe(2)
})

it('can divide with 0', () => {
    expect(calculator.divide(10, 0)).toBeNull()
})