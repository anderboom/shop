import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { CategoryInterface } from '../types/catergory.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categoryName = '';
  constructor(private http: HttpClient) {}

  // Получаем список всех категорий
  fetch(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>('/api/admin/category');
  }

  getById(id: any): Observable<CategoryInterface> {
    return this.http.get<CategoryInterface>(`/api/admin/category/${id}`);
  }
}
