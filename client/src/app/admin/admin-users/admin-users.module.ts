import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
  AdminUsersComponent,
} from './components/admin-users/admin-users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'users', component: AdminUsersComponent }],
  },
];

@NgModule({
  declarations: [AdminUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule,
    NgxPaginationModule,
  ],
})
export class AdminUsersModule {}
