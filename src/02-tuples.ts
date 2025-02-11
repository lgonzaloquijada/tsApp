const prices: number[] = [100, 75, 42];
const data: (string | number)[] = ['John', 'Jane', 'Jack', 42];

let user: [string, number] = ['luis', 15];
//user = ['luis', 16, 290]; // Error - Expected 2 elements, but got 3.
//user = []; // Error - Expected 2 elements, but got 0.

const [username, age] = user;
console.log(username); // luis
console.log(age); // 15
