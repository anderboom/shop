import {
  Component,
  OnDestroy,
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

import {
  of,
  Subscription,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MaterialService } from 'src/app/shared/classes/material.service';

import {
  AdminCategoriesService,
} from '../../services/admin-categories.service';
import { AdminCategoryInterface } from '../../types/admin-categories.interface';

@Component({
  selector: 'app-admin-categories-form',
  templateUrl: './admin-categories-form.component.html',
  styleUrls: ['./admin-categories-form.component.css'],
})
export class AdminCategoriesFormComponent implements OnInit, OnDestroy {
  isNew = true;
  category!: AdminCategoryInterface;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  categorySub$: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: AdminCategoriesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form.disable();
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          if (params['id']) {
            this.isNew = false;
            return this.categoriesService.getById(params['id']);
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
          this.form.enable();
        },
        (error) => MaterialService.toast(error.error.message)
      );
  }

  ngOnDestroy(): void {
    this.categorySub$?.unsubscribe();
  }

  get f() {
    return this.form.controls;
  }
  onSubmit() {
    let obs$;
    this.form.disable();
    if (this.isNew) {
      obs$ = this.categoriesService.create(this.form.value);
    } else {
      obs$ = this.categoriesService.update(this.category._id, this.form.value);
    }

    this.categorySub$ = obs$.subscribe(
      (category) => {
        this.category = category;
        MaterialService.toast('Сохранено!');
        this.form.enable();
      },
      (error) => {
        MaterialService.toast(error.error.message);
        this.form.enable();
      }
    );
  }

  deleteCategory() {
    const decision = window.confirm(
      `Вы уверены что хотите удалить категорию ${this.category.name}?`
    );
    if (decision) {
      this.categorySub$ = this.categoriesService
        .delete(this.category._id)
        .subscribe(
          (response) => MaterialService.toast(response.message),
          (error) => MaterialService.toast(error.error.message),
          () => this.router.navigate(['/admin/categories'])
        );
    }
  }
}
