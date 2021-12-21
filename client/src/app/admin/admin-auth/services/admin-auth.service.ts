import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AdminLoginInterface } from '../types/admin-login.interface';
import { AdminRegisterInterface } from '../types/admin-password.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private token = '';

  constructor(private http: HttpClient) {}

  login(user: AdminLoginInterface): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('/api/admin/login', user).pipe(
      tap(({ token }) => {
        localStorage.setItem('auth-token-admin', token);
        this.setToken(token);
      })
    );
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isAuthAdmin(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken('');
    localStorage.clear();
  }

  register(user: AdminRegisterInterface): Observable<AdminRegisterInterface> {
    return this.http.post<AdminRegisterInterface>('/api/admin/register', user);
  }
}
