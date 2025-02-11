let anyVar: any = 10;
anyVar = 'Hello';
anyVar = true;
anyVar = { name: 'John' };
anyVar = [1, 2, 3];
anyVar = () => console.log('Hello');
anyVar = new Date();
anyVar = null;

anyVar.toFixed(); // No error

let isNew: boolean = anyVar;

let unknownVar: unknown = 10;
unknownVar = 'Hello';
unknownVar = true;
unknownVar = { name: 'John' };
unknownVar = [1, 2, 3];
unknownVar = () => console.log('Hello');
unknownVar = new Date();
unknownVar = null;

//unknownVar.toFixed(); // Error: Object is of type 'unknown'.
//unknownVar.toUpperCase(); // Error: Object is of type 'unknown'.
if (typeof unknownVar === 'number') {
  let numberVar = unknownVar.toFixed();
  console.log(numberVar);
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};

//let isNew2: boolean = unknownVar; // Error: Type 'unknown' is not assignable to type 'boolean'.
if (typeof unknownVar === 'boolean') {
  let isNew2: boolean = unknownVar;
}
