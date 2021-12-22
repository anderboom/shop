export interface AdminOrderInterface {
  date?: Date;
  order?: number;
  delivery: DeliveryInterface;
  userData: UserDataInterface;
  cart: CartInterface[];
  totalCost: number;
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

export interface CartInterface {
  name: string;
  cost?: number;
  promoCost?: number;
  orderQuantity?: number;
  quantity?: number;
  imageSrc?: string;
  groupPages?: string;
  _id?: string;
}
