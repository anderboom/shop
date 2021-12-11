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
  AdminHistoryComponent,
} from './components/admin-history/admin-history.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'history', component: AdminHistoryComponent }],
  },
];

@NgModule({
  declarations: [AdminHistoryComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminHistoryModule {}
