import {
  Component,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';
import {
  AdminCategoriesService,
} from 'src/app/admin/admin-categories/services/admin-categories.service';
import {
  Category,
} from 'src/app/admin/admin-categories/types/categories.interface';

@Component({
  selector: 'app-admin-storage',
  templateUrl: './admin-storage.component.html',
  styleUrls: ['./admin-storage.component.css'],
})
export class AdminStorageComponent implements OnInit {
  categories$: Observable<Category[]> | undefined;

  constructor(private categoriesService: AdminCategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.fetch();
  }
}
