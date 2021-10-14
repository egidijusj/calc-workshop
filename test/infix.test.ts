/* env jest */
import {calc as _calc} from '../src'
import { Syntax } from '../src/types'

describe('calc', () => {
  const calc = (input: string) => _calc(input, Syntax.infix)

  test('addition', () => {
    expect(calc('2 + 2')).toEqual(4)
  })

  test('subtraction', () => {
    expect(calc('2 - 2')).toEqual(0)
  })

  test('no whitespace', () => {
    expect(calc('2+3')).toEqual(5)
  })

  test('ignored newline', () => {
    expect(calc('2\n+3')).toEqual(5)
  })

  test('multiple additions', () => {
    expect(calc('2 + 3 + 4')).toEqual(9)
  })
  
  test('multiplication', () => {
    expect(calc('2 * 3')).toEqual(6)
  })

  test('division', () => {
    expect(calc('4 / 2')).toEqual(2)
  })

  test('multiple multiplications', () => {
    expect(calc('2 * 3 * 4')).toEqual(24)
  })

  test('expression ordering', () => {
    expect(calc('2 + 3 * 4')).toEqual(14)
  })

  test('mix', () => {
    expect(calc('2 * 3 + 4 / 2')).toEqual(8)
  })

  test('floats', () => {
    expect(calc('2.1 + 3.5')).toEqual(5.6)
  })

  test('two-digit numbers', () => {
    expect(calc('22 + 33')).toEqual(55)
  })

  test('constants', () => {
    expect(calc('2')).toEqual(2)
  })

  test('floats', () => {
    expect(calc('2.1 + 3.5')).toEqual(5.6)
  })

  test('syntax errors', () => {
    expect(() => calc('2a + 2')).toThrowError()
  })

  test('semantical errors', () => {
    expect(() => calc('2 + 3 2')).toThrowError()
    expect(() => calc('2 +')).toThrowError()
  })
})