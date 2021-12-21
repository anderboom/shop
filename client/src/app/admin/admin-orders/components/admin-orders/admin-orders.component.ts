import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Subscription } from 'rxjs';

import { AdminOrdersService } from '../../services/admin-orders.service';
import { AdminOrderInterface } from '../../types/admin-orders.interface';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent implements OnInit {
  @ViewChild('modal') modalRef: ElementRef | undefined;
  ordersSub$: Subscription | undefined;
  orders: AdminOrderInterface[] = [];
  loading = false;

  constructor(private ordersService: AdminOrdersService) {}

  ngOnInit(): void {
    this.loading = true;
    this.ordersSub$ = this.ordersService.fetchOrders().subscribe((orders) => {
      this.orders = orders;
    });
    this.loading = false;
  }
}
