import { CartInterface } from './cart.interface';

export interface OrderInterface {
  delivery: DeliveryInterface;
  userData: UserDataInterface;
  cart: CartInterface[];
  totalCost: number;
  groupPages?: string;
  _id?: string;
}

export interface DeliveryInterface {
  payment: string;
  deliveryName: string;
  area?: string;
  city?: string;
  department?: string;
}

export interface UserDataInterface {
  firstName: string;
  secondName: string;
  phoneNumber: string;
  email?: string;
  comment?: string;
}
