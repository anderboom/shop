import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Params
} from '@angular/router';

import {
  Observable,
  of
} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { MaterialService } from '../../shared/classes/material.service';
import {
  Category,
  Position
} from '../../shared/interfaces';
import { CategoriesService } from '../../shared/services/categories.service';
import { PositionsService } from '../../shared/services/positions.service';

@Component({
  selector: 'app-admin-storage-form',
  templateUrl: './admin-storage-form.component.html',
  styleUrls: ['./admin-storage-form.component.css'],
})
export class AdminStorageFormComponent implements OnInit {
  @Input('categoryId') categoryId: string | undefined;
  
  categories$: Observable<Category[]> | undefined
  positions: Position[] = [];
  loading = false;
  skipCounter$ = 0
  category!: Category 
  

  constructor(
    private route: ActivatedRoute,
    private positionsService: PositionsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          if (params['id']) {
            this.categoryId = params['id']
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
