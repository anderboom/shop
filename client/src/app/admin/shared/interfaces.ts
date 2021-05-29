export interface User {
  login: string;
  password: string;
}

export interface Category {
  name: string;
  user?: string;
  _id?: string;
}

export interface Message {
  message: string;
}

export interface Position {
  name: string;
  cost: number;
  category: string;
  description?: string;
  _id?: string;
  imageSrc?: string;
  quantity: number;
  orderQuantity?: number;
  inputCost?: number;
  brand?: string;
}

export interface Order {
  date?: Date;
  order?: number;
  user?: string;
  list: OrderPosition[];
  _id: string;
}

export interface OrderPosition {
  name: string;
  cost: number;
  orderQuantity?: number;
  quantity: number;
  imageSrc?: string;
  _id?: string;
}
