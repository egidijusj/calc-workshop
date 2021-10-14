import { Token } from './types'
import { tokenIsOperator } from './utils'

export const tokenize = (input: string): Token[] => {
  const tokens: Token[] = []

  let i = 0
  let char: string

  const next = () => {
    i++
    char = input[i]
  }

  while (i < input.length) {
    char = input[i]

    if (/\d/.test(char)) {
      let numString = char
      next()

      while (/[\d\.]/.test(char)) {
        numString += char
        next()
      }
      const num = parseFloat(numString)
      tokens.push(num)
      continue
    }

    if (tokenIsOperator(char)) {
      tokens.push(char)
      next()
      continue
    }

    if (char === " " || char === "\n") {
      next()
      continue
    }

    throw SyntaxError(`Unknown char "${char}"`)
  }

  return tokens
}