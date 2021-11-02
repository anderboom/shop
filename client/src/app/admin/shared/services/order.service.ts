import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  Order,
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

  constructor(private http: HttpClient) {
    let localTotalQuantity = JSON.parse(
      localStorage.getItem('totalQuantity') || '0'
    );
    if (localTotalQuantity) {
      this.totalQuantity = localTotalQuantity;
    }
    let totalOrder: OrderPosition[] = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );
    if (totalOrder) {
      this.list = totalOrder;
    }
  }

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

    let candidate = this.list.find((p) => p._id === position._id);
    if (candidate) {
      candidate.orderQuantity! += orderPosition.orderQuantity!;
    } else {
      this.list.push(orderPosition);
    }
    this.totalQuantity += position.orderQuantity!;
    localStorage.setItem('totalQuantity', JSON.stringify(this.totalQuantity));
    this.computePrice();
    localStorage.setItem('cart', JSON.stringify(this.list));
    localStorage.setItem('total', JSON.stringify(this.totalCost));
  }

  private computePrice() {
    this.totalCost = this.list.reduce((total, item) => {
      return (total += item.orderQuantity! * item.cost);
    }, 0);
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>('/api/order', order);
  }

  fetch(params: any = {}): Observable<Order[]> {
    return this.http.get<Order[]>('/api/order', {
      params: new HttpParams({
        fromObject: params,
      }),
    });
  }

  remove(order: OrderPosition) {
    // this.totalCost -= order.cost * order.orderQuantity!;
    // this.list.splice(this.list.indexOf(order), 1);
    // this.totalQuantity -= order.orderQuantity!;
    // localStorage.setItem('cart', JSON.stringify(this.list));
    // localStorage.setItem('total', JSON.stringify(this.totalCost));
    // localStorage.setItem('totalQuantity', JSON.stringify(this.totalQuantity));
  }

  clear() {}
}
