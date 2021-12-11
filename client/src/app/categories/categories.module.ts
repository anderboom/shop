import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';

import {
  SiteLayoutComponent,
} from '../shared/layouts/site-layout/site-layout.component';
import { LoaderModule } from '../shared/modules/loader/loader.module';
import {
  CategoriesFormComponent,
} from './components/categories-form/categories-form.component';
import {
  CategoriesComponent,
} from './components/categories/categories.component';
import {
  FilteredPositionComponent,
} from './components/filtered-position/filtered-position.component';
import {
  PositionsFormComponent,
} from './components/positions-form/positions-form.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'category',
        component: CategoriesComponent,
      },
      {
        path: 'category/:id',
        component: CategoriesFormComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesFormComponent,
    PositionsFormComponent,
    FilteredPositionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    CategoriesComponent,
    CategoriesFormComponent,
    PositionsFormComponent,
    FilteredPositionComponent,
  ],
})
export class CategoriesModule {}
