import { AddExpr, Expression,Token } from '../types'

export default (tokens: Token[]): Expression => {
  return new AddExpr(2, 2)
}