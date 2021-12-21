import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Message } from '../../shared/interfaces';
import { AdminCategoryInterface } from '../types/admin-categories.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminCategoriesService {
  categoryName = '';
  constructor(private http: HttpClient) {}

  // Получаем список всех категорий
  fetch(): Observable<AdminCategoryInterface[]> {
    return this.http.get<AdminCategoryInterface[]>('/api/admin/category');
  }

  getById(id: any): Observable<AdminCategoryInterface> {
    return this.http.get<AdminCategoryInterface>(`/api/admin/category/${id}`);
  }

  create(name: AdminCategoryInterface): Observable<AdminCategoryInterface> {
    return this.http.post<AdminCategoryInterface>('/api/admin/category', name);
  }
  // createPromo(
  //   name: AdminCategoryInterface
  // ): Observable<AdminCategoryInterface> {
  //   return this.http.post<AdminCategoryInterface>('/api/admin/promo', name);
  // }

  update(
    id: any,
    name: AdminCategoryInterface
  ): Observable<AdminCategoryInterface> {
    return this.http.patch<AdminCategoryInterface>(
      `/api/admin/category/${id}`,
      name
    );
  }
  delete(id: any): Observable<Message> {
    return this.http.delete<Message>(`/api/admin/category/${id}`);
  }
}
