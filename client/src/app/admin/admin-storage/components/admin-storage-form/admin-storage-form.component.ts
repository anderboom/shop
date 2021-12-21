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
import { MaterialService } from 'src/app/shared/classes/material.service';

import { AdminStorageService } from '../../services/admin-storage.service';
import {
  StorageCategoryInterface,
  StoragePositionInterface,
} from '../../types/admin-storage.interface';

@Component({
  selector: 'app-admin-storage-form',
  templateUrl: './admin-storage-form.component.html',
  styleUrls: ['./admin-storage-form.component.css'],
})
export class AdminStorageFormComponent implements OnInit {
  @Input('categoryId') categoryId: string | undefined;

  storageCategories$: Observable<StorageCategoryInterface[]> | undefined;
  storagePositions: StoragePositionInterface[] = [];
  loading = false;
  storageCategory: StorageCategoryInterface | undefined;

  constructor(
    private route: ActivatedRoute,
    private storageService: AdminStorageService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          if (params['id']) {
            this.categoryId = params['id'];
            return this.storageService.fetchPositions(params['id']);
          }

          return of(null);
        })
      )
      .subscribe(
        (positions) => {
          if (positions) {
            this.storagePositions = positions;
            this.loading = false;
          }
        },
        (error) => MaterialService.toast(error.error.message)
      );

    this.route.params
      .pipe(
        switchMap((params: Params) => {
          if (params['id']) {
            return this.storageService.getCategoryById(params['id']);
          }

          return of(null);
        })
      )
      .subscribe(
        (category) => {
          if (category) {
            this.storageCategory = category;
          }
        },
        (error) => MaterialService.toast(error.error.message)
      );
  }
}
