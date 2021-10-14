export enum Syntax {
  infix = 'infix',
  prefix = 'prefix'
}

export enum Operator {
  ADD = '+',
  SUB = '-',
  MUL = '*',
  DIV = '/',
}

export type Token = Operator | number

abstract class BinaryExpressionBase {
  constructor(public left: Expression, public right: Expression) { }
}
export class AddExpr extends BinaryExpressionBase { }
export class SubExpr extends BinaryExpressionBase { }
export class MulExpr extends BinaryExpressionBase { }
export class DivExpr extends BinaryExpressionBase { }

export type Expression =
  Terminal | BinaryExpression

export type BinaryExpression =
  AddExpr
  | SubExpr
  | MulExpr
  | DivExpr

export type Terminal = number