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

import { AuthclientGuard } from '../shared/classes/authclient.guard';
import {
  AuthLayoutComponent,
} from '../shared/layouts/auth-layout/auth-layout.component';
import {
  ProfileLayoutComponent,
} from '../shared/layouts/profile-layout/profile-layout.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: ProfileLayoutComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthclientGuard],
      },
    ],
  },
];
@NgModule({
  declarations: [RegisterComponent, LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AuthModule {}
