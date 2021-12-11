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
import { AdminHistoryModule } from './admin-history/admin-history.module';
import { AdminOrdersModule } from './admin-orders/admin-orders.module';
import { AdminStorageModule } from './admin-storage/admin-storage.module';
import {
  AdminLayoutComponent,
} from './shared/admin-layout/admin-layout.component';
import {
  AdminLoginLayoutComponent,
} from './shared/admin-login-layout/admin-login-layout.component';
import { LoaderComponent } from './shared/components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminAuthModule,
    AdminDashboardModule,
    AdminCategoriesModule,
    AdminStorageModule,
    AdminOrdersModule,
    AdminHistoryModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [RouterModule],
  declarations: [
    AdminLayoutComponent,
    AdminLoginLayoutComponent,

    LoaderComponent,
  ],
})
export class AdminModule {}
