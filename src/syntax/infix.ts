import { AddExpr, DivExpr, Expression, MulExpr, Operator, SubExpr, Token } from '../types'
import { isNumber } from '../utils'

export default (tokens: Token[]): Expression => {
  let position = 0
  const peek = () => tokens[position]
  const next = () => {
    position++
  }

  const parseTerminalExpr = (): Expression => {
    const t = peek()
    if (isNumber(t)) {
      next()
      return t
    }
    throw new SyntaxError(`Expected number, got ${t}`)
  }

  const parsePrimaryExpr = (): Expression => {
    let expr = parseTerminalExpr()
    let t = peek()

    while (t && (t === Operator.MUL || t === Operator.DIV)) {
      next()
      const right = parseTerminalExpr()
      expr = t === Operator.MUL
        ? new MulExpr(expr, right)
        : new DivExpr(expr, right)
      t = peek()
    }

    return expr
  }

  const parseExpr = (): Expression => {
    let expr = parsePrimaryExpr()
    let t = peek()

    while (t && (t === Operator.ADD || t === Operator.SUB)) {
      next()
      const right = parsePrimaryExpr()

      expr = t === Operator.ADD
        ? new AddExpr(expr, right)
        : new SubExpr(expr, right)
      t = peek()
    }
    return expr
  }

  const program = parseExpr()

  if (position < tokens.length) {
    throw new SyntaxError(`Expected end of program, found "${peek()}"`)
  }

  return program
}