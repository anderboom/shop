export interface AdminPositionInterface {
  name: string;
  cost: number;
  category: string;
  description?: string;
  _id?: string;
  imageSrc?: string;
  quantity: number;
  orderQuantity?: number;
  inputCost?: number;
  promoCost?: number;
  brand?: string;
  groupPages?: string;
}
