import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PositionInterface } from '../types/position.interface';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  sortedPositions: PositionInterface[] = [];

  constructor(private http: HttpClient) {}
  fetch(categoryId: any): Observable<PositionInterface[]> {
    return this.http.get<PositionInterface[]>(
      `/api/admin/position/${categoryId}`
    );
  }
  fetchSorted(categoryId: any): Observable<PositionInterface[]> {
    return this.http
      .get<PositionInterface[]>(`/api/admin/position/${categoryId}`)
      .pipe(
        map((positions) => {
          this.sortedPositions = positions;
          this.sortedPositions.sort((p1, p2) => p1.cost - p2.cost);
          return this.sortedPositions;
        })
      );
  }
}
