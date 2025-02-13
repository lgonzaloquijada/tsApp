import { Product } from './product.model';

export interface CreateProductDTO
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;

export interface ProductUpdateDTO extends Partial<CreateProductDTO> {}

type example2 = Required<Product>;

export interface ProductFindDTO extends Readonly<Partial<Product>> {}
