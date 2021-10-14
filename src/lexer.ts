import { Token } from './types'

export const tokenize = (input: string): Token[] => {
 return input.split('') as Token[]
}