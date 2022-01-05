import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Message } from '../../shared/interfaces';
import { AdminUserInterface } from '../types/admin.users.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersService {
  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<AdminUserInterface[]> {
    return this.http.get<AdminUserInterface[]>(`/api/auth/register`);
  }

  deleteUser(user: AdminUserInterface): Observable<Message> {
    return this.http.delete<Message>(`/api/auth/register/${user._id}`);
  }
}
