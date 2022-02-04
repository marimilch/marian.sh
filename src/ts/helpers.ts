import LooseObject from '../ts/loose-object'

export function applyProps(from: LooseObject, to: LooseObject): void
{
  for (const prop in from) {
    to[prop] = from[prop]
  }
}