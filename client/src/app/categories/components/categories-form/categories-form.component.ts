import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router,
} from '@angular/router';

import {
  Observable,
  of,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MaterialService } from 'src/app/admin/shared/classes/material.service';
import { SearchService } from 'src/app/search/services/search.service';

import { CategoriesService } from '../../services/categories.service';
import { CategoryInterface } from '../../types/catergory.interface';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css'],
})
export class CategoriesFormComponent implements OnInit {
  categories$: Observable<CategoryInterface[]> | undefined;
  category: CategoryInterface | undefined;

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
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
            this.searchService.isSorted = false;

            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            };
          }
        },
        (error) => MaterialService.toast(error.error.message)
      );
  }

  get isFilter(): boolean {
    return this.searchService.isFilter;
  }
  get isSorted(): boolean {
    return this.searchService.isSorted;
  }
}
