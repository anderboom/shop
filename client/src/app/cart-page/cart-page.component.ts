import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
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
    let sumTotalCost = JSON.parse(localStorage.getItem('total') || '0');
    this.totalCost = sumTotalCost;
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  delete(order: OrderPosition) {
    this.totalCost -= order.cost * order.orderQuantity!;
    this.orders.splice(this.orders.indexOf(order), 1);
    this.ordersService.totalQuantity -= order.orderQuantity!;
    this.ordersService.totalCost = this.totalCost;

    localStorage.setItem('cart', JSON.stringify(this.orders));
    localStorage.setItem('total', JSON.stringify(this.totalCost));
    localStorage.setItem(
      'totalQuantity',
      JSON.stringify(this.ordersService.totalQuantity)
    );
    this.ordersService.remove(order);
    if (this.orders.length === 0) {
      this.ordersService.totalCost = 0;
      this.ordersService.totalQuantity = 0;
      this.ordersService.list = [];
      localStorage.removeItem('total');
      localStorage.removeItem('totalQuantity');
      localStorage.removeItem('cart');
    }
  }
}
