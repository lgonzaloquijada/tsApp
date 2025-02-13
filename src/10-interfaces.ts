type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  sizes: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'Camiseta',
  createdAt: new Date(),
  stock: 100,
  sizes: 'M',
});

const addProduct = (product: Product) => {
  products.push(product);
};
