import { Expression } from './types'

export const run = (expr: Expression): number => {
  return (expr as any).left as any + (expr as any).right as any
}