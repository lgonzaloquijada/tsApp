//Luis => [L,u,i,s]
//[L,u,i,s] => Luis

function parseString(stro: string | string[]): string | string[] {
  if (typeof stro === 'string') {
    return stro.split('');
  } else {
    return stro.join('');
  }
}

console.log(parseString('Luis'));
console.log(parseString(['L', 'u', 'i', 's']));
console.log(parseString('Luis') === 'Luis');
console.log(parseString(['L', 'u', 'i', 's']) === 'Luis');

const result = parseString('Luis');
//result.reverse(); // Error: Property 'reverse' does not exist on type 'string | string[]'.

if (Array.isArray(result)) {
  result.reverse();
}
console.log(result);
