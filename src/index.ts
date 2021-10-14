import { tokenize } from './lexer'
import parseInfix from './syntax/infix'
import parsePrefix from './syntax/prefix'
import { run } from './interpreter'
import { Syntax } from './types'

export const calc = (input: string, syntax: Syntax = Syntax.infix): number => {

  const createAST = syntax === Syntax.infix
    ? parseInfix
    : parsePrefix

  const tokens = tokenize(input)
  const ast = createAST(tokens)
  const result = run(ast)

  return result
}