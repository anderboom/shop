import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Message } from '../../shared/interfaces';
import { AdminOrderInterface } from '../types/admin-orders.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminOrdersService {
  orders: AdminOrderInterface[] = [];

  constructor(private http: HttpClient) {}

  fetchOrders(): Observable<AdminOrderInterface[]> {
    return this.http.get<AdminOrderInterface[]>('/api/admin/order');
  }

  delete(order: AdminOrderInterface): Observable<Message> {
    return this.http.delete<Message>(`/api/admin/order/${order._id}`);
  }
}
