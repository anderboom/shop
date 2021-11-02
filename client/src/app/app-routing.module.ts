import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { CartPageComponent } from './cart-page/cart-page.component';
import {
  OrderFormComponent
} from './cart-page/order-form/order-form.component';
import {
  CategoriesFormComponent
} from './categories-page/categories-form/categories-form.component';
import {
  CategoriesPageComponent
} from './categories-page/categories-page.component';
import {
  DashboardPageComponent
} from './dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthclientGuard } from './shared/classes/authclient.guard';
import {
  SiteLayoutComponent
} from './shared/layouts/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', redirectTo: '/category', pathMatch: 'full' },
      { path: 'category', component: CategoriesPageComponent },
      { path: 'category/:id', component: CategoriesFormComponent },
      { path: 'cart', component: CartPageComponent },
      { path: 'login', component: LoginPageComponent },
      {
        path: 'dashboard',
        canActivate: [AuthclientGuard],
        component: DashboardPageComponent,
      },
      { path: 'register', component: RegisterPageComponent },
      { path: 'order', component: OrderFormComponent },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
