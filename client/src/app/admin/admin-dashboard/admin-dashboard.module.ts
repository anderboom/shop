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
