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

import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { MaterialService } from '../../shared/classes/material.service';
import { Category } from '../../shared/interfaces';
import {
  AdminCategoriesService,
} from '../../shared/services/admin-categories.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css'],
})
export class AdminCategoryFormComponent implements OnInit {
  isNew = true;
  category!: Category;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

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

    obs$.subscribe(
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
      this.categoriesService.delete(this.category._id).subscribe(
        (response) => MaterialService.toast(response.message),
        (error) => MaterialService.toast(error.error.message),
        () => this.router.navigate(['/admin/categories'])
      );
    }
  }
}
