const capitalize = require('../code/capitalize')

it('capitalizes single word', () => {
    expect(capitalize('hello')).toBe('Hello')
})

it('capitalizes multiple words', () => {
    expect(capitalize('the quick brown fox jumps over the lazy dog')).toBe('The Quick Brown Fox Jumps Over The Lazy Dog')
})

it('works with numbers and punctuation', () => {
    expect(capitalize('123! abc!')).toBe('123! Abc!')
})

it('works with extra spaces', () => {
    expect(capitalize('hello     world')).toBe('Hello     World')
})