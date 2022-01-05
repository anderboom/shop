import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminAuthModule } from './admin-auth/admin-auth.module';
import {
  AdminCategoriesModule,
} from './admin-categories/admin-categories.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { AdminOrdersModule } from './admin-orders/admin-orders.module';
import { AdminPromoModule } from './admin-promo/admin-promo.module';
import { AdminStorageModule } from './admin-storage/admin-storage.module';
import { AdminUsersModule } from './admin-users/admin-users.module';
import {
  AdminLayoutComponent,
} from './shared/layouts/admin-layout/admin-layout.component';
import {
  AdminLoginLayoutComponent,
} from './shared/layouts/admin-login-layout/admin-login-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminAuthModule,
    AdminDashboardModule,
    AdminCategoriesModule,
    AdminStorageModule,
    AdminOrdersModule,
    AdminPromoModule,
    AdminUsersModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [RouterModule],
  declarations: [AdminLayoutComponent, AdminLoginLayoutComponent],
})
export class AdminModule {}
