import {
  Component,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';

import {
  AdminCategoriesService,
} from '../../services/admin-categories.service';
import { AdminCategoryInterface } from '../../types/admin-categories.interface';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css'],
})
export class AdminCategoriesComponent implements OnInit {
  categories$: Observable<AdminCategoryInterface[]> | undefined;

  constructor(private categoriesService: AdminCategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.fetch();
  }
}
