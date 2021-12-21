import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
  AdminOrdersComponent,
} from './components/admin-orders/admin-orders.component';
import { AdminOrdersPositionComponent } from './components/admin-orders-position/admin-orders-position.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'order', component: AdminOrdersComponent }],
  },
];

@NgModule({
  declarations: [AdminOrdersComponent, AdminOrdersPositionComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LoaderModule],
})
export class AdminOrdersModule {}
