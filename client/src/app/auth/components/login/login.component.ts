import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Params,
  Router,
} from '@angular/router';

import { Subscription } from 'rxjs';
import { MaterialService } from 'src/app/shared/classes/material.service';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  loginSub: Subscription | undefined;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        MaterialService.toast('Увійдіть, використовуючи свої дані!');
      } else if (params['accessDenied']) {
        MaterialService.toast('Авторизуйтесь!');
      } else if (params['sessionFailed']) {
        MaterialService.toast('Час сесії минув, необхідно пройти авторизацію!');
      }
    });
  }

  ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.form.disable();
    localStorage.setItem('email', JSON.stringify(this.form.value.email));
    this.loginSub = this.auth.login(this.form.value).subscribe(
      () => {
        this.router.navigate(['/']);
        MaterialService.toast(`З поверненням, вітаємо в нашому магазині!`);
      },
      (error) => {
        MaterialService.toast(error.error.message);
        this.form.enable();
      }
    );
  }
}
