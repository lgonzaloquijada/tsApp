import { BaseModel } from '../base.model';
import { Product } from '../products/product.model';
import { User } from '../users/user.model';

export interface Order extends BaseModel {
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
