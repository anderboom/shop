import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  AdminPromoPositionInterface,
} from '../types/admin-promo-postion.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminPromoPositionsService {
  positions: AdminPromoPositionInterface[] | undefined;

  constructor(private http: HttpClient) {}

  // fetch(): Observable<AdminPromoPositionInterface[]> {
  //   return this.http.get<AdminPromoPositionInterface[]>(`/api/admin/position`);
  // }
  fetchByCategory(categoryId: any): Observable<AdminPromoPositionInterface[]> {
    return this.http
      .get<AdminPromoPositionInterface[]>(`/api/admin/position/${categoryId}`)
      .pipe(
        map((positions) => {
          this.positions = positions;
          return this.positions.filter((p) => p.groupPages === 'promo');
        })
      );
  }

  updateToMain(
    position: AdminPromoPositionInterface
  ): Observable<AdminPromoPositionInterface> {
    return this.http.patch<AdminPromoPositionInterface>(
      `/api/admin/position/${position._id}`,
      position
    );
  }
}
