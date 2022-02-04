import LooseObject from '../ts/loose-object'

export function applyProps(from: LooseObject, to: LooseObject): void
{
  for (const prop in from) {
    to[prop] = from[prop]
  }
}

export function wait(delay: number) {
  return new Promise( (resolve: Function) => {
    setTimeout(resolve, delay);
  });
}
