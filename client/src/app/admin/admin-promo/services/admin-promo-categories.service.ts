import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  AdminPromoCategoryInterface,
} from '../types/admin-promo-category.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminPromoCategoriesService {
  constructor(private http: HttpClient) {}

  // Получаем список всех категорий
  fetch(): Observable<AdminPromoCategoryInterface[]> {
    return this.http.get<AdminPromoCategoryInterface[]>('/api/admin/category');
  }

  getById(id: any): Observable<AdminPromoCategoryInterface> {
    return this.http.get<AdminPromoCategoryInterface>(
      `/api/admin/category/${id}`
    );
  }
}
