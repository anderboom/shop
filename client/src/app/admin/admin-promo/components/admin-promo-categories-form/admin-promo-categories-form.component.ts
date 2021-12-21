import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import {
  ActivatedRoute,
  Params,
  Router,
} from '@angular/router';

import {
  of,
  Subscription,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MaterialService } from 'src/app/shared/classes/material.service';

import {
  AdminPromoCategoriesService,
} from '../../services/admin-promo-categories.service';
import {
  AdminPromoCategoryInterface,
} from '../../types/admin-promo-category.interface';

@Component({
  selector: 'app-admin-promo-categories-form',
  templateUrl: './admin-promo-categories-form.component.html',
  styleUrls: ['./admin-promo-categories-form.component.css'],
})
export class AdminPromoCategoriesFormComponent implements OnInit, OnDestroy {
  category: AdminPromoCategoryInterface | undefined;
  form = new FormGroup({
    name: new FormControl(''),
  });
  cSub$: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private promoCategoriesService: AdminPromoCategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          if (params['id']) {
            return this.promoCategoriesService.getById(params['id']);
          }
          return of(null);
        })
      )
      .subscribe(
        (category) => {
          if (category) {
            this.category = category;
            this.form.patchValue({
              name: category.name,
            });
            MaterialService.updateTextInputs();
          }
        },
        (error) => MaterialService.toast(error.error.message)
      );
  }

  ngOnDestroy(): void {
    this.cSub$?.unsubscribe();
  }
}
