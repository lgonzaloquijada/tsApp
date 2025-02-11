export const createProduct = (
  name: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    name,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

const p1 = createProduct('Laptop', true, 10);
console.log(p1);

const p2 = createProduct('Laptop', true);
console.log(p2);

// 0 === false
// '' === false
// false === false

const p3 = createProduct('Laptop', false, 0);
console.log(p3);

const p4 = createProduct('Laptop', undefined, 0);
console.log(p4);
