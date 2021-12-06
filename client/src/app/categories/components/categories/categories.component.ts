import {
  Component,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';

import { CategoriesService } from '../../services/categories.service';
import { CategoryInterface } from '../../types/catergory.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<CategoryInterface[]> | undefined;
  category: CategoryInterface | undefined;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.fetch();
  }
}
