import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  OrderInterface,
  OrderPositionInterface,
} from '../types/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  list: OrderPositionInterface[] = [];

  constructor(private http: HttpClient) {}

  create(order: OrderInterface): Observable<OrderInterface> {
    return this.http.post<OrderInterface>('/api/order', order);
  }

  fetch(params: any = {}): Observable<OrderInterface[]> {
    return this.http.get<OrderInterface[]>('/api/order', {
      params: new HttpParams({
        fromObject: params,
      }),
    });
  }

  remove(order: OrderPositionInterface) {}

  clear() {}
}
