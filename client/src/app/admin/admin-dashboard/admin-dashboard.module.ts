import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AuthGuard } from '../shared/classes/auth.guard';
import {
  AdminLayoutComponent,
} from '../shared/layouts/admin-layout/admin-layout.component';
import {
  AdminDashboardComponent,
} from './components/admin-dashboard-page/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'dashboard', component: AdminDashboardComponent }],
  },
];

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminDashboardModule {}
