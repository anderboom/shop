import {
  Component,
  OnInit,
} from '@angular/core';

import { AdminAuthService } from './admin/shared/services/admin-auth.service';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AdminAuthService,
    private authclient: AuthService
  ) {}

  ngOnInit() {
    const localStorageToken = localStorage.getItem('auth-token');
    if (localStorageToken !== null) {
      this.auth.setToken(localStorageToken);
      this.authclient.setToken(localStorageToken);
    }
  }
}
