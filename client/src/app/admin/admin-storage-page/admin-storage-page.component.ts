import {
  Component,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';

import { Category } from '../shared/interfaces';
import {
  AdminCategoriesService,
} from '../shared/services/admin-categories.service';

@Component({
  selector: 'app-admin-storage-page',
  templateUrl: './admin-storage-page.component.html',
  styleUrls: ['./admin-storage-page.component.css'],
})
export class AdminStoragePageComponent implements OnInit {
  categories$: Observable<Category[]> | undefined;

  constructor(private categoriesService: AdminCategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.fetch();
  }
}
