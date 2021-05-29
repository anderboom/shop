import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  Message,
  Position
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PositionsService { 

  constructor(private http: HttpClient) {}

  fetch(categoryId: any): Observable<Position[]> {
    return this.http.get<Position[]>(`/api/admin/position/${categoryId}`);
  }

  fetchForStorage(categoryId: any): Observable<Position[]> {
    return this.http.get<Position[]>(`/api/admin/storage/${categoryId}`);
  }

  create(position: Position, image?: File): Observable<Position> {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('name', position.name);
    fd.append('brand', String(position.brand));
    fd.append('description', position.description!);
    fd.append('cost', String(position.cost));
    fd.append('category', position.category);
    fd.append('inputCost', String(position.inputCost));
    fd.append('quantity', String(position.quantity));

    return this.http.post<Position>('/api/admin/position', fd);
  }

  update(position: Position): Observable<Position> {
    return this.http.patch<Position>(
      `/api/admin/position/${position._id}`,
      position
    );
  }

  delete(position: Position): Observable<Message> {
    return this.http.delete<Message>(`/api/admin/position/${position._id}`);
  }
}
