import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';

import { AuthGuard } from '../shared/classes/auth.guard';
import {
  AdminLayoutComponent,
} from '../shared/layouts/admin-layout/admin-layout.component';
import {
  AdminPromoCategoriesFormComponent,
} from './components/admin-promo-categories-form/admin-promo-categories-form.component';
import {
  AdminPromoCategoriesComponent,
} from './components/admin-promo-categories/admin-promo-categories.component';
import {
  AdminPromoPositionsComponent,
} from './components/admin-promo-positions/admin-promo-positions.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'promo', component: AdminPromoCategoriesComponent },
      {
        path: 'promo/:id',
        component: AdminPromoCategoriesFormComponent,
      },
      { path: 'promoposition', component: AdminPromoPositionsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminPromoPositionsComponent,
    AdminPromoCategoriesComponent,
    AdminPromoCategoriesFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminPromoModule {}
