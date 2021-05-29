import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  Category,
  Message
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categoryName = '';
  constructor(private http: HttpClient) {}

  // Получаем список всех категорий
  fetch(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/admin/category');
  }

  getById(id: any): Observable<Category> {
    return this.http.get<Category>(`/api/admin/category/${id}`);
  }

  create(name: Category): Observable<Category> {
    return this.http.post<Category>('/api/admin/category', name);
  }

  update(id: any, name: Category): Observable<Category> {
    return this.http.patch<Category>(`/api/admin/category/${id}`, name);
  }

  delete(id: any): Observable<Message> {
    return this.http.delete<Message>(`/api/admin/category/${id}`);
  }
}
