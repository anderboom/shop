import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Params,
} from '@angular/router';

import {
  Observable,
  of,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  AdminCategoriesService,
} from 'src/app/admin/admin-categories/services/admin-categories.service';
import {
  AdminPositionsService,
} from 'src/app/admin/admin-categories/services/admin-positions.service';
import {
  Position,
} from 'src/app/admin/admin-categories/types/positions.interface';
import { MaterialService } from 'src/app/admin/shared/classes/material.service';
import { Category } from 'src/app/admin/shared/interfaces';

@Component({
  selector: 'app-admin-storage-form',
  templateUrl: './admin-storage-form.component.html',
  styleUrls: ['./admin-storage-form.component.css'],
})
export class AdminStorageFormComponent implements OnInit {
  @Input('categoryId') categoryId: string | undefined;

  categories$: Observable<Category[]> | undefined;
  positions: Position[] = [];
  loading = false;
  skipCounter$ = 0;
  category: Category | undefined;

  constructor(
    private route: ActivatedRoute,
    private positionsService: AdminPositionsService,
    private categoriesService: AdminCategoriesService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          if (params['id']) {
            this.categoryId = params['id'];
            return this.positionsService.fetch(params['id']);
          }

          return of(null);
        })
      )
      .subscribe(
        (positions) => {
          if (positions) {
            this.positions = positions;
            this.loading = false;
          }
        },
        (error) => MaterialService.toast(error.error.message)
      );

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
          }
        },
        (error) => MaterialService.toast(error.error.message)
      );
  }
}
