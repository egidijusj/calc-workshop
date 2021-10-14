import { Expression, Operator, Token } from "./types";

export const tokenIsOperator = (t: string): t is Operator =>
  t === Operator.ADD ||
  t === Operator.SUB ||
  t === Operator.MUL ||
  t === Operator.DIV

export const isNumber = (obj: Expression | Token): obj is number =>
  typeof obj === 'number'