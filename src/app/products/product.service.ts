import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (product: Product) => {
  //product.id = products.length + 1; //we shouldn't do this in a real app
  products.push(product);
};
