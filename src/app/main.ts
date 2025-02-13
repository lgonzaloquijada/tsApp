import { addProduct } from './products/product.service';

addProduct({
  id: 1,
  title: 'Camiseta',
  stock: 100,
  sizes: 'M',
  category: {
    id: 1,
    name: 'Ropa',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  createdAt: new Date(),
  updatedAt: new Date(),
});
console.log(products);
