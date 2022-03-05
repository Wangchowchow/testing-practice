const arrayAnalysis = require('../code/arrayAnalysis')

it('returns min value', () =>
  expect(arrayAnalysis([6, 8, 3, 1, 2, 4]).min).toBe(1))

it('returns max value', () =>
  expect(arrayAnalysis([6, 8, 3, 1, 2, 4]).max).toBe(8))

it('returns array length', () =>
  expect(arrayAnalysis([6, 8, 3, 1, 2, 4]).length).toBe(6))

it('returns array average', () =>
  expect(arrayAnalysis([6, 8, 3, 1, 2, 4]).average).toBe(4))

it('analyses all properties', () =>
  expect(arrayAnalysis([6, 8, 3, 1, 2, 4])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }))