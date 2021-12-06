export interface OrderInterface {
  date?: Date;
  order?: number;
  user?: string;
  list: OrderPositionInterface[];
  _id: string;
}

export interface OrderPositionInterface {
  name: string;
  cost: number;
  orderQuantity?: number;
  quantity: number;
  imageSrc?: string;
  _id?: string;
}
