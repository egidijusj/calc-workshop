import { AddExpr, DivExpr, Expression, MulExpr, SubExpr } from './types'
import { isNumber } from './utils'

export const run = (expr: Expression): number => {
  if (isNumber(expr)) {
    return expr
  }

  switch (expr.constructor) {
    case AddExpr: {
      return run(expr.left) + run(expr.right)
    }
    case SubExpr: {
      return run(expr.left) - run(expr.right)
    }
    case MulExpr: {
      return run(expr.left) * run(expr.right)
    }
    case DivExpr: {
      return run(expr.left) / run(expr.right)
    }
  }

  throw new EvalError(`Unsupported AST node: ${expr}`)
}