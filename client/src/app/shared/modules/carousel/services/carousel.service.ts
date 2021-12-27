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

  fetchPromoImg(): Observable<PositionInterface[]> {
    return this.http.get<PositionInterface[]>(`/api/admin/position/`).pipe(
      map((positions) => {
        this.positions = positions;
        return this.positions.filter((p) => p.groupPages === MenuEnum.promo);
      })
    );
  }
}
