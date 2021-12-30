import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AuthclientGuard } from '../shared/classes/authclient.guard';
import {
  AuthLayoutComponent,
} from '../shared/layouts/auth-layout/auth-layout.component';
import { ProfileComponent } from './components/dashboard/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'profile',
        canActivate: [AuthclientGuard],
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProfileModule {}
