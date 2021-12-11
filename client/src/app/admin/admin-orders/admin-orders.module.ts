import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  AdminLayoutComponent,
} from '../shared/admin-layout/admin-layout.component';
import { AuthGuard } from '../shared/classes/auth.guard';
import {
  AdminOrdersComponent,
} from './components/admin-orders/admin-orders.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'order', component: AdminOrdersComponent }],
  },
];

@NgModule({
  declarations: [AdminOrdersComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminOrdersModule {}
