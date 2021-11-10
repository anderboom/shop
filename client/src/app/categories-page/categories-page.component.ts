import {
  Component,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';

import { Category } from '../admin/shared/interfaces';
import { CategoriesService } from '../admin/shared/services/categories.service';
import { SearchService } from '../shared/services/search.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css'],
})
export class CategoriesPageComponent implements OnInit {
  categories$: Observable<Category[]> | undefined;
  category: Category | undefined;

  constructor(
    private categoriesService: CategoriesService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.fetch();
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
