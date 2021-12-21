import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  StorageCategoryInterface,
  StoragePositionInterface,
} from '../types/admin-storage.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminStorageService {
  constructor(private http: HttpClient) {}

  fetchCategories(): Observable<StorageCategoryInterface[]> {
    return this.http.get<StorageCategoryInterface[]>('/api/admin/category');
  }

  getCategoryById(id: any): Observable<StorageCategoryInterface> {
    return this.http.get<StorageCategoryInterface>(`/api/admin/category/${id}`);
  }

  fetchPositions(categoryId: any): Observable<StoragePositionInterface[]> {
    return this.http.get<StoragePositionInterface[]>(
      `/api/admin/position/${categoryId}`
    );
  }
}
