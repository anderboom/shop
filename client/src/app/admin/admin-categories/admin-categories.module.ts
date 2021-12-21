import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';

import { AuthGuard } from '../shared/classes/auth.guard';
import {
  AdminLayoutComponent,
} from '../shared/layouts/admin-layout/admin-layout.component';
import {
  AdminCategoriesFormComponent,
} from './components/admin-categories-form/admin-categories-form.component';
import {
  AdminCategoriesComponent,
} from './components/admin-categories/admin-categories.component';
import {
  AdminPositionsComponent,
} from './components/admin-positions/admin-positions.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'categories', component: AdminCategoriesComponent },
      { path: 'categories/new', component: AdminCategoriesFormComponent },
      { path: 'categories/:id', component: AdminCategoriesFormComponent },
      { path: 'position', component: AdminPositionsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminCategoriesComponent,
    AdminCategoriesFormComponent,
    AdminPositionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class AdminCategoriesModule {}
