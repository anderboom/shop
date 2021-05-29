import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';

import {
  Observable,
  of
} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MaterialService } from 'src/app/admin/shared/classes/material.service';
import { Category } from 'src/app/admin/shared/interfaces';
import {
  CategoriesService
} from 'src/app/admin/shared/services/categories.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css'],
})
export class CategoriesFormComponent implements OnInit {
  categories$: Observable<Category[]> | undefined;

  category!: Category;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.fetch();
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          if (params['id']) {
            return this.categoriesService.getById(params['id']);
          }
          return of(null);
        })
      )
      .subscribe(
        (category) => {
          if (category) {
            this.category = category;
            this.categoriesService.categoryName = category.name;
            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            };
          }
        },
        (error) => MaterialService.toast(error.error.message)
      );
  }

  get isSearch(): boolean {
    return this.searchService.isSearch;
  }

  get isBrand(): boolean {
    return this.searchService.isBrand;
  }
  get isPrice(): boolean {
    return this.searchService.isPrice;
  }
}
