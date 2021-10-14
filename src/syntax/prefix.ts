import { AddExpr, DivExpr, Expression, MulExpr, Operator, SubExpr, Token } from '../types'
import { isNumber, tokenIsOperator } from '../utils'

export default (tokens: Token[]): Expression => {
  let position = 0
  const peek = () => tokens[position]
  const next = () => {
    position++
  }

  const parseExpr = (): Expression => {
    const t = peek()

    if (isNumber(t)) {
      next()
      return t
    }

    if (tokenIsOperator(t)) {
      next()

      const left = parseExpr()
      const right = parseExpr()

      switch (t) {
        case Operator.ADD: {
          return new AddExpr(left, right)
        }
        case Operator.SUB: {
          return new SubExpr(left, right)
        }
        case Operator.MUL: {
          return new MulExpr(left, right)
        }
        case Operator.DIV: {
          return new DivExpr(left, right)
        }
      }
    }

    throw new SyntaxError(`Unexpected token "${t}"`)
  }

  const program = parseExpr()

  if (position < tokens.length) {
    throw new SyntaxError(`Expected end of program, found "${peek()}"`)
  }

  return program
}