import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { PositionInterface } from 'src/app/categories/types/position.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  isFilter = false;
  foundPosition: PositionInterface[] = [];
  brandPositions: PositionInterface[] = [];

  constructor(private http: HttpClient) {}

  fetch(): Observable<PositionInterface[]> {
    return this.http.get<PositionInterface[]>(`/api/admin/position/`);
  }
}
