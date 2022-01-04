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

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';

import {
  AuthLayoutComponent,
} from '../shared/layouts/auth-layout/auth-layout.component';
import {
  ProfileLayoutComponent,
} from '../shared/layouts/profile-layout/profile-layout.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'cart',
        component: CartComponent,
      },
    ],
  },
  {
    path: '',
    component: ProfileLayoutComponent,
    children: [
      {
        path: 'order',
        component: OrderComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [CartComponent, OrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    TabViewModule,
    ToolbarModule,
    ButtonModule,
  ],
})
export class CartModule {}
