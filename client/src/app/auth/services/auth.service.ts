import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoginInterface } from '../types/login.interface';
import { RegisterInterface } from '../types/register.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = '';

  constructor(private http: HttpClient) {}

  login(user: LoginInterface): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('/api/login', user).pipe(
      tap(({ token }) => {
        localStorage.setItem('auth-token', token);
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

  isAuth(): boolean {
    return !!this.token;
  }

  logout() {
    localStorage.removeItem('auth-token');
  }

  register(user: RegisterInterface): Observable<RegisterInterface> {
    return this.http.post<RegisterInterface>('/api/register', user);
  }
}
