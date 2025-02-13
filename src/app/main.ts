import { addProduct, products } from './products/product.service';
import { faker } from '@faker-js/faker';

for (let i = 0; i < 10; i++) {
  addProduct({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 1, max: 100 }),
    sizes: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    category: {
      id: 1,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    color: faker.color.human(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    isNew: faker.datatype.boolean(),
    price: parseFloat(faker.commerce.price()),
    tags: faker.helpers.arrayElements(['new', 'hot', 'sale', 'organic'], 2),
  });
}

console.log(products);
console.log(`Products count: ${products.length}`);
