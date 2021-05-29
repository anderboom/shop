import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';

import { Subscription } from 'rxjs';

import { MaterialService } from '../shared/classes/material.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css'],
})
export class AdminLoginPageComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  aSub: Subscription | undefined;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        // Вы зарегистрированы
        MaterialService.toast('Пользователь успешно зарегистрирован!')
      } else if (params['accessDenied']) {
        // Сперва авторизируйтесь
        MaterialService.toast('Для начала работы с сервисом авторизируйтесь в системе!')
      } else if (params['sessionFailed']) {
        // Закончилось время сессии
        MaterialService.toast('Время сессии истекло, авторизируйтесь в системе!')
      }
    });
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.form.disable();
    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/admin/dashboard']),
      (error) => {
        MaterialService.toast(error.error.message)
        this.form.enable();
      }
    );
  }
}
