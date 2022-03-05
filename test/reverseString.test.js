const reverseString = require('../code/reverseString')

it('reverses single word', () => {
    expect(reverseString('hello')).toBe('olleh')
})

it('reverses multiple words', () => {
    expect(reverseString('hello there')).toBe('ereht olleh')
})

it('works with numbers and punctuation', () => {
    expect(reverseString('123! abc!')).toBe('!cba !321')
})
it('works with blank strings', () => {
    expect(reverseString('')).toBe('')
})