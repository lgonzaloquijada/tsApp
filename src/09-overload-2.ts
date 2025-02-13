//Luis => [L,u,i,s]
//[L,u,i,s] => Luis

export function parseString(stro: string): string[];
export function parseString(stro: string[]): string;
export function parseString(stro: number): boolean;
export function parseString(stro: unknown): unknown;

export function parseString(stro: unknown): unknown {
  if (typeof stro === 'string') {
    return stro.split('');
  } else if (Array.isArray(stro)) {
    return stro.join('');
  } else if (typeof stro === 'number') {
    return stro > 0;
  } else {
    return stro;
  }
}

console.log(parseString('Luis'));
console.log(parseString(['L', 'u', 'i', 's']));
console.log(parseString(['L', 'u', 'i', 's']) === 'Luis');

const result = parseString('Luis');
//result.reverse(); // Error: Property 'reverse' does not exist on type 'string | string[]'.

if (Array.isArray(result)) {
  result.reverse();
}
console.log(result);
