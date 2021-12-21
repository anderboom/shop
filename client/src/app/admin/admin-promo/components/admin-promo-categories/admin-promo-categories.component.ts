import {
  Component,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';

import {
  AdminPromoCategoriesService,
} from '../../services/admin-promo-categories.service';
import {
  AdminPromoCategoryInterface,
} from '../../types/admin-promo-category.interface';

@Component({
  selector: 'app-admin-promo-categories',
  templateUrl: './admin-promo-categories.component.html',
  styleUrls: ['./admin-promo-categories.component.css'],
})
export class AdminPromoCategoriesComponent implements OnInit {
  categories$: Observable<AdminPromoCategoryInterface[]> | undefined;

  constructor(private promoCategoriesService: AdminPromoCategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.promoCategoriesService.fetch();
  }
}
