import {
  Component,
  OnDestroy,
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
  Subscription,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SearchService } from 'src/app/search/services/search.service';

import { CategoriesService } from '../../services/categories.service';
import { CategoryInterface } from '../../types/catergory.interface';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css'],
})
export class CategoriesFormComponent implements OnInit, OnDestroy {
  categories$: Observable<CategoryInterface[]> | undefined;
  categories: CategoryInterface[] | undefined;
  category: CategoryInterface | undefined;
  cSub$: Subscription | undefined;

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnDestroy(): void {
    this.cSub$?.unsubscribe();
  }
  ngOnInit(): void {
    this.categories$ = this.categoriesService.fetch();

    this.cSub$ = this.route.params
      .pipe(
        switchMap((params: Params) => {
          if (params['id']) {
            return this.categoriesService.getById(params['id']);
          }
          return of(null);
        })
      )
      .subscribe((category) => {
        if (category) {
          this.category = category;
          this.categoriesService.categoryName = category.name;
          this.router.navigate([`category/${this.category._id}/shop`]);
        }
      });
  }
}
