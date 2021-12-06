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
  Router,
} from '@angular/router';

import { Subscription } from 'rxjs';
import { MaterialService } from 'src/app/admin/shared/classes/material.service';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  registerSub: Subscription | undefined;
  constructor(
    private auth: AuthService,
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
    if (this.registerSub) {
      this.registerSub?.unsubscribe();
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.form.disable();
    this.registerSub = this.auth.register(this.form.value).subscribe(
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
