const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
//numbers.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'.
//numbers.pop(); // Error: Property 'pop' does not exist on type 'readonly number[]'.
//numbers.unshift(1); // Error: Property 'unshift' does not exist on type 'readonly number[]'.
numbers.filter((n) => n > 2);
numbers.map((n) => n * 2);
numbers.reduce((acc, n) => acc + n, 0);
numbers.slice(1, 3);
