import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PositionInterface } from 'src/app/categories/types/position.interface';
import { MenuEnum } from 'src/app/shared/constants/constants.enum';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  positions: PositionInterface[] | undefined;
  imgPositions: string[] = [];

  constructor(private http: HttpClient) {}

  fetchPromoImg(): Observable<string[]> {
    return this.http.get<PositionInterface[]>(`/api/admin/position/`).pipe(
      map((positions) => {
        this.positions = positions;
        this.positions = this.positions.filter(
          (p) => p.groupPages === MenuEnum.promo
        );
        this.positions.map((p) => this.imgPositions.push(p.imageSrc!));
        return this.imgPositions;
      })
    );
  }
}

// return timer(2000).pipe(
//   mergeMap(() => this.http.get(`${this.BASE_URL}${url}`))
// );
