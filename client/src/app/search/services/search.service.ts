import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PositionInterface } from 'src/app/categories/types/position.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  isFilter = false;
  isSorted = false;
  foundPositions: PositionInterface[] = [];
  brandsArr: PositionInterface[] = [];
  brandsNameArr: string[] = [];
  categoryName = '';
  positionId: any = null;
  categoryId: any = null;

  constructor(private http: HttpClient) {}

  fetch(): Observable<PositionInterface[]> {
    return this.http.get<PositionInterface[]>(`/api/admin/position/`).pipe(
      map((positions) => {
        this.foundPositions = positions;
        this.foundPositions.forEach((p) => (p.orderQuantity = 1));
        return this.foundPositions;
      })
    );
  }

  getBrandNames(): Observable<string[]> {
    return this.http.get<PositionInterface[]>('/api/admin/position/').pipe(
      map((positions: PositionInterface[]) => {
        this.brandsArr = positions;
        this.brandsArr.forEach((p) => {
          this.brandsNameArr.push(p.brand!);
          this.brandsNameArr = Array.from(new Set(this.brandsNameArr));
        });
        return this.brandsNameArr;
      })
    );
  }
  selectedBrandFetch(brand: string): Observable<PositionInterface[]> {
    return this.http.get<PositionInterface[]>('/api/admin/position/').pipe(
      map((positions: PositionInterface[]) => {
        this.brandsArr = positions;
        this.brandsArr = this.brandsArr.filter((p) => p.brand === brand);
        this.brandsArr.forEach((p) => (p.orderQuantity = 1));
        return this.brandsArr;
      })
    );
  }
}
