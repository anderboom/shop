import {
  Component,
  OnInit,
} from '@angular/core';

import {
  Observable,
  Subscription,
} from 'rxjs';
import { SearchService } from 'src/app/search/services/search.service';

import { CategoriesService } from '../../services/categories.service';
import { CategoryInterface } from '../../types/catergory.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<CategoryInterface[]> | undefined;
  cSub: Subscription | undefined;

  constructor(
    private categoriesService: CategoriesService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.fetch();
  }
}
