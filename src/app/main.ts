import {
  addProduct,
  products,
  updateProduct,
} from './products/product.service';
import { faker } from '@faker-js/faker';

for (let i = 0; i < 10; i++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 1, max: 100 }),
    sizes: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    categoryId: faker.string.uuid(),
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

const product = products[0];
updateProduct(product.id, { title: 'Updated product', stock: 80 });
console.log(products);
