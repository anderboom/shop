import {
  Component,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';

import { Category } from '../shared/interfaces';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-admin-category-page',
  templateUrl: './admin-category-page.component.html',
  styleUrls: ['./admin-category-page.component.css'],
})
export class AdminCategoryPageComponent implements OnInit {
  categories$: Observable<Category[]> | undefined;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.fetch();
  }
}
