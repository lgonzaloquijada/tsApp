import { Product } from '../products/product.model';
import { User } from '../users/user.model';

export interface Order {
  id: string | number;
  createdAt: Date;
  products: Product[];
  user: User;
  status: OrderStatus;
}

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
}
