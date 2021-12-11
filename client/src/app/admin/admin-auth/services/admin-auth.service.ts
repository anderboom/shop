import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private token = '';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<{ token: string }> {
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

  register(user: User): Observable<User> {
    return this.http.post<User>('/api/admin/register', user);
  }
}
