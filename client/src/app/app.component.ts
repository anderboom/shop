import {
  Component,
  OnInit,
} from '@angular/core';

import {
  AdminAuthService,
} from './admin/admin-auth/services/admin-auth.service';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AdminAuthService,
    private authClient: AuthService
  ) {}

  ngOnInit() {
    const localStorageToken = localStorage.getItem('auth-token');
    const adminLocalStorageToken = localStorage.getItem('auth-token-admin');
    if (localStorageToken !== null) {
      this.authClient.setToken(localStorageToken);
    }
    if (adminLocalStorageToken !== null) {
      this.auth.setToken(adminLocalStorageToken);
    }
  }
}
