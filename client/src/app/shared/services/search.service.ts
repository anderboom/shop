import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Position } from 'src/app/admin/shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  isSearch = false;
  isBrand = false;
  isPrice = false;
  foundPosition: Position[] = [];
  brandPositions: Position[] = [];

  constructor(private http: HttpClient) {}

  fetch(): Observable<Position[]> {
    return this.http.get<Position[]>(`/api/admin/position/`);
  }

  resetFilter() {
    this.isSearch = false;
    this.isBrand = false;
    this.isPrice = false;
  }
}
