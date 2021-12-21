export interface StorageCategoryInterface {
  name: string;
  user?: string;
  _id?: string;
}

export interface StoragePositionInterface {
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
