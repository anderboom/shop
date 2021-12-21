import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchService } from 'src/app/search/services/search.service';
import { MenuEnum } from 'src/app/shared/constants/constants.enum';

import { PositionInterface } from '../types/position.interface';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  positions: PositionInterface[] = [];

  constructor(private http: HttpClient, private searchService: SearchService) {}
  fetch(categoryId: any): Observable<PositionInterface[]> {
    return this.http
      .get<PositionInterface[]>(`/api/admin/position/${categoryId}`)
      .pipe(
        map((positions) => {
          this.positions = positions;
          this.positions.map((p) => (p.orderQuantity = 1));
          return this.positions.filter((p) => p.groupPages === MenuEnum.main);
        })
      );
  }

  fetchByIncrease(categoryId: any): Observable<PositionInterface[]> {
    return this.http
      .get<PositionInterface[]>(`/api/admin/position/${categoryId}`)
      .pipe(
        map((positions) => {
          this.positions = positions;
          this.positions.map((p) => (p.orderQuantity = 1));
          this.positions.sort((p1, p2) => p1.cost - p2.cost);
          return this.positions.filter((p) => p.groupPages === MenuEnum.main);
        })
      );
  }

  fetchByDecrease(categoryId: any): Observable<PositionInterface[]> {
    return this.http
      .get<PositionInterface[]>(`/api/admin/position/${categoryId}`)
      .pipe(
        map((positions) => {
          this.positions = positions;
          this.positions.map((p) => (p.orderQuantity = 1));
          this.positions.sort((p1, p2) => p2.cost - p1.cost);
          return this.positions.filter((p) => p.groupPages === MenuEnum.main);
        })
      );
  }

  fetchPromo(): Observable<PositionInterface[]> {
    return this.http.get<PositionInterface[]>(`/api/admin/position`).pipe(
      map((positions) => {
        this.positions = positions;
        this.positions.map((p) => (p.orderQuantity = 1));
        return this.positions.filter((p) => p.groupPages === MenuEnum.promo);
      })
    );
  }
  fetchPromoByIncrease(): Observable<PositionInterface[]> {
    return this.http.get<PositionInterface[]>(`/api/admin/position`).pipe(
      map((positions) => {
        this.positions = positions;
        this.positions.map((p) => (p.orderQuantity = 1));
        this.positions.sort((p1, p2) => p1.promoCost! - p2.promoCost!);
        return this.positions.filter((p) => p.groupPages === MenuEnum.promo);
      })
    );
  }
  fetchPromoByDecrease(): Observable<PositionInterface[]> {
    return this.http.get<PositionInterface[]>(`/api/admin/position`).pipe(
      map((positions) => {
        this.positions = positions;
        this.positions.map((p) => (p.orderQuantity = 1));
        this.positions.sort((p1, p2) => p2.promoCost! - p1.promoCost!);
        return this.positions.filter((p) => p.groupPages === MenuEnum.promo);
      })
    );
  }
}
