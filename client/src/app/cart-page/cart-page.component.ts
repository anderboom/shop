import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';

import { OrderPosition } from 'src/app/admin/shared/interfaces';

import { OrderService } from '../admin/shared/services/order.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  @ViewChild('quantityInput') quantityInput: ElementRef | undefined;
  orders: OrderPosition[] = [];
  totalCost = 0;
  positionQuantity = 1;

  constructor(private ordersService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.orders = this.ordersService.list;
    this.totalCost = this.ordersService.totalCost;
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  delete(order: OrderPosition) {
    this.totalCost -= order.cost * order.orderQuantity!;
    this.orders.splice(this.orders.indexOf(order), 1);
    this.ordersService.totalQuantity -= order.orderQuantity!;
    this.ordersService.totalCost = this.totalCost;
  }
}
