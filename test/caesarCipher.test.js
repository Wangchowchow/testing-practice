const caesarCipher = require('../code/caesarCipher')

it('works', () => {
    expect(caesarCipher("hello world", 5)).toBe("mjqqt btwqi")
})

it('works with negative numbers', () => {
    expect(caesarCipher("hello world", -10)).toBe("xubbe mehbt")
})

it('works with large positive numbers', () => {
    expect(caesarCipher("hello world", 1000)).toBe("tqxxa iadxp")
})

it('works with capitals', () => {
    expect(caesarCipher("HeLlO WoRlD", 5)).toBe("MjQqT BtWqI")
})