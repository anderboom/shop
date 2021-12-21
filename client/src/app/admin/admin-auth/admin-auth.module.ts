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

import { AuthGuard } from '../shared/classes/auth.guard';
import {
  AdminLayoutComponent,
} from '../shared/layouts/admin-layout/admin-layout.component';
import {
  AdminLoginLayoutComponent,
} from '../shared/layouts/admin-login-layout/admin-login-layout.component';
import {
  AdminLoginComponent,
} from './components/admin-login/admin-login.component';
import {
  AdminRegisterComponent,
} from './components/admin-register/admin-register.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLoginLayoutComponent,
    children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: AdminLoginComponent },
    ],
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'register', component: AdminRegisterComponent }],
  },
];

@NgModule({
  declarations: [AdminLoginComponent, AdminRegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AdminAuthModule {}
