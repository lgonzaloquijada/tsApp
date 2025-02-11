const withoutEnd = () => {
  while (true) {
    console.log('Never stop learning!');
  }
};

const fail = () => {
  throw new Error('Something went wrong');
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'it is a string';
  } else if (Array.isArray(input)) {
    return 'it is an array';
  }
  return fail();
};

console.log(example('Hello'));
console.log(example([1, 2, 3]));
console.log(example(10));
