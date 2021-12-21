import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Message } from '../../shared/interfaces';
import { AdminPositionInterface } from '../types/admin-positions.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminPositionsService {
  positions: AdminPositionInterface[] | undefined;
  constructor(private http: HttpClient) {}

  fetch(categoryId: any): Observable<AdminPositionInterface[]> {
    return this.http
      .get<AdminPositionInterface[]>(`/api/admin/position/${categoryId}`)
      .pipe(
        map((positions) => {
          this.positions = positions;
          return this.positions.filter((p) => p.groupPages === 'main');
        })
      );
  }

  fetchForStorage(categoryId: any): Observable<AdminPositionInterface[]> {
    return this.http.get<AdminPositionInterface[]>(
      `/api/admin/storage/${categoryId}`
    );
  }

  create(
    position: AdminPositionInterface,
    image?: File
  ): Observable<AdminPositionInterface> {
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
    fd.append('promoCost', String(position.promoCost));
    fd.append('quantity', String(position.quantity));
    fd.append('groupPages', String(position.groupPages));

    return this.http.post<AdminPositionInterface>('/api/admin/position', fd);
  }

  update(position: AdminPositionInterface): Observable<AdminPositionInterface> {
    return this.http.patch<AdminPositionInterface>(
      `/api/admin/position/${position._id}`,
      position
    );
  }

  updateToPromo(
    position: AdminPositionInterface
  ): Observable<AdminPositionInterface> {
    return this.http.patch<AdminPositionInterface>(
      `/api/admin/position/${position._id}`,
      position
    );
  }

  delete(position: AdminPositionInterface): Observable<Message> {
    return this.http.delete<Message>(`/api/admin/position/${position._id}`);
  }
}
