import {
  Component,
  OnInit
} from '@angular/core';

import { AuthService } from './admin/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shop';
  constructor( private auth: AuthService) {}

  ngOnInit() {
    const localStorageToken = localStorage.getItem('auth-token')
    if(localStorageToken !== null) {
      this.auth.setToken(localStorageToken)
    }
  }
}
