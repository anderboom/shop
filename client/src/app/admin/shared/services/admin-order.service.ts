import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  Order,
  OrderPosition,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AdminOrderService {
  public list: OrderPosition[] = [];

  constructor(private http: HttpClient) {}

  fetch(params: any = {}): Observable<Order[]> {
    return this.http.get<Order[]>('/api/order', {
      params: new HttpParams({
        fromObject: params,
      }),
    });
  }

  remove(order: OrderPosition) {}

  clear() {}
}
