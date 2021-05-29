import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  OrderPosition,
  Position
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  public list: OrderPosition[] = [];
  public totalQuantity = 0;
  public totalCost = 0;

  constructor(private http: HttpClient) {}

  addToCart(position: Position) {
    const orderPosition: OrderPosition = Object.assign(
      {},
      {
        name: position.name,
        cost: position.cost,
        quantity: position.quantity,
        imageSrc: position.imageSrc,
        orderQuantity: position.orderQuantity,
        _id: position._id,
      }
    );

    const candidate = this.list.find((p) => p._id === position._id);
    if (candidate) {
      candidate.orderQuantity! += orderPosition.orderQuantity!;
    } else {
      this.list.push(orderPosition);
    }
    this.totalQuantity += position.orderQuantity!;

    this.computePrice();
  }

  private computePrice() {
    this.totalCost = this.list.reduce((total, item) => {
      return (total += item.orderQuantity! * item.cost);
    }, 0);
  }

  remove() {}

  clear() {}
}
