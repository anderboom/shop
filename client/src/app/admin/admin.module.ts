import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  AdminCategoryFormComponent
} from './admin-category-page/admin-category-form/admin-category-form.component';
import {
  AdminPositionFormComponent
} from './admin-category-page/admin-category-form/admin-position-form/admin-position-form.component';
import {
  AdminCategoryPageComponent
} from './admin-category-page/admin-category-page.component';
import {
  AdminDashboardPageComponent
} from './admin-dashboard-page/admin-dashboard-page.component';
import {
  AdminHistoryPageComponent
} from './admin-history-page/admin-history-page.component';
import {
  AdminLoginPageComponent
} from './admin-login-page/admin-login-page.component';
import {
  AdminOrdersPageComponent
} from './admin-orders-page/admin-orders-page.component';
import {
  AdminRegisterPageComponent
} from './admin-register-page/admin-register-page.component';
import {
  AdminStorageFormComponent
} from './admin-storage-page/admin-storage-form/admin-storage-form.component';
import {
  AdminStoragePageComponent
} from './admin-storage-page/admin-storage-page.component';
import {
  AdminLayoutComponent
} from './shared/admin-layout/admin-layout.component';
import {
  AdminLoginLayoutComponent
} from './shared/admin-login-layout/admin-login-layout.component';
import { AuthGuard } from './shared/classes/auth.guard';
import { LoaderComponent } from './shared/components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLoginLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: AdminLoginPageComponent },
        ],
      },
      {
        path: '',
        component: AdminLayoutComponent, canActivate: [AuthGuard],
        children: [
          { path: 'dashboard', component: AdminDashboardPageComponent },
          { path: 'register', component: AdminRegisterPageComponent },
          { path: 'order', component: AdminOrdersPageComponent },
          { path: 'categories', component: AdminCategoryPageComponent },
          { path: 'categories/new', component: AdminCategoryFormComponent },
          { path: 'categories/:id', component: AdminCategoryFormComponent },
          { path: 'history', component: AdminHistoryPageComponent },
          { path: 'position', component: AdminPositionFormComponent },
          { path: 'storage', component: AdminStoragePageComponent },
          { path: 'storage/:id', component: AdminStorageFormComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [
    AdminLayoutComponent,
    AdminLoginPageComponent,
    AdminLoginLayoutComponent,
    AdminCategoryPageComponent,
    AdminOrdersPageComponent,
    AdminRegisterPageComponent,
    AdminHistoryPageComponent,
    LoaderComponent,
    AdminCategoryFormComponent,
    AdminPositionFormComponent,
    AdminStoragePageComponent,
    AdminStorageFormComponent,
  ],
})
export class AdminModule {}
