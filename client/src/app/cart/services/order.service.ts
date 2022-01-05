import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { OrderInterface } from '../types/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  createOrder(order: OrderInterface): Observable<OrderInterface> {
    return this.http.post<OrderInterface>('/api/admin/order', order);
  }
}
