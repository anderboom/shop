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
  Router
} from '@angular/router';

import { Subscription } from 'rxjs';

import { MaterialService } from '../admin/shared/classes/material.service';
import { AuthclientService } from '../shared/services/authclient.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  aSub: Subscription | undefined;
  constructor(
    private auth: AuthclientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params: Params) => {
    //   if (params['registered']) {
    //     // Вы зарегистрированы
    //     MaterialService.toast('Користувач успішно зареєстрований!');
    //   } else if (params['accessDenied']) {
    //     // Сперва авторизируйтесь
    //     MaterialService.toast(
    //       'Для початку роботи з сервісом необхідно пройти авторизацію в системі!'
    //     );
    //   } else if (params['sessionFailed']) {
    //     // Закончилось время сессии
    //     MaterialService.toast(
    //       'Час сесії минув, необхідно пройти авторизацію в системі!'
    //     );
    //   }
    // });
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub?.unsubscribe();
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.form.disable();
    this.aSub = this.auth.register(this.form.value).subscribe(
      () => {
        this.router.navigate(['/login'], {
          queryParams: {
            registered: true,
          },
        });
      },
      (error) => {
        MaterialService.toast(error.error.message);
        this.form.enable();
      }
    );
  }
}
