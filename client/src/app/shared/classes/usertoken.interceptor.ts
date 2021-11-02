import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  Observable,
  throwError
} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthclientService } from '../services/authclient.service';

@Injectable()
export class UserTokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthclientService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.isAuth()) {
      req = req.clone({
        setHeaders: {
          Authorization: this.auth.getToken(),
        },
      });
    }
    return next
      .handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => this.handleAuthError(error))
      );
  }

  private handleAuthError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 401) {
      this.router.navigate(['/login'], {
        queryParams: {
          sessionFailed: true,
        },
      });
    }
    return throwError(error);
  }
}
