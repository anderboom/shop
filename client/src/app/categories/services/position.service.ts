import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PositionInterface } from '../types/position.interface';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  constructor(private http: HttpClient) {}
  fetch(categoryId: any): Observable<PositionInterface[]> {
    return this.http.get<PositionInterface[]>(
      `/api/admin/position/${categoryId}`
    );
  }
}
