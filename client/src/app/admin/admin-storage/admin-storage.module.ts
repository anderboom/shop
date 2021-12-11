import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';

import {
  AdminLayoutComponent,
} from '../shared/admin-layout/admin-layout.component';
import { AuthGuard } from '../shared/classes/auth.guard';
import {
  AdminStorageFormComponent,
} from './components/admin-storage-form/admin-storage-form.component';
import {
  AdminStorageComponent,
} from './components/admin-storage/admin-storage.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'storage', component: AdminStorageComponent },
      { path: 'storage/:id', component: AdminStorageFormComponent },
    ],
  },
];

@NgModule({
  declarations: [AdminStorageComponent, AdminStorageFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LoaderModule],
})
export class AdminStorageModule {}
