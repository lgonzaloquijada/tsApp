import { faker } from '@faker-js/faker';
import {
  CreateProductDTO,
  ProductFindDTO,
  ProductUpdateDTO,
} from './product.dto';
import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (product: CreateProductDTO): Product => {
  const newProduct = {
    ...product,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: product.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: Product['id'],
  product: ProductUpdateDTO
): Product => {
  const index = products.findIndex((product) => product.id === id);
  products[index] = { ...products[index], ...product };
  return products[index];
};

export const findProducts = (dto: ProductFindDTO): Product[] => {
  //dto.tags = [];
  //dto.tags?.pop(); // it only fails if the array is ReadonlyArray
  //dto.tags?.push('other'); // it only fails if the array is ReadonlyArray
  //dto.tags?.shift(); // it only fails if the array is ReadonlyArray
  //dto.tags?.unshift('new'); // it only fails if the array is ReadonlyArray
  const keys = Object.keys(dto);
  return products;
};
