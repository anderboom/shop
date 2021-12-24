import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { Subscription } from 'rxjs';
import {
  MenuEnum,
} from 'src/app/admin/shared/admin.constants/admin.constants.enum';
import {
  MaterialInstance,
  MaterialService,
} from 'src/app/shared/classes/material.service';

import { AdminOrdersService } from '../../services/admin-orders.service';
import { AdminOrderInterface } from '../../types/admin-orders.interface';

@Component({
  selector: 'app-admin-orders-position',
  templateUrl: './admin-orders-position.component.html',
  styleUrls: ['./admin-orders-position.component.css'],
})
export class AdminOrdersPositionComponent implements OnDestroy, AfterViewInit {
  @Input() orders: AdminOrderInterface[] | undefined;
  @ViewChild('modal') modalRef: ElementRef | undefined;

  modal: MaterialInstance | undefined;
  selectedOrder: AdminOrderInterface | undefined;
  main = MenuEnum.main;
  promo = MenuEnum.promo;
  doneSub$: Subscription | undefined;

  constructor(private ordersService: AdminOrdersService) {}

  ngAfterViewInit(): void {
    this.modal = MaterialService.initModal(this.modalRef!);
  }

  ngOnDestroy(): void {
    this.modal?.destroy();
    this.doneSub$?.unsubscribe();
  }

  closeModal() {
    this.modal?.close();
  }

  onSelectOrder(order: AdminOrderInterface) {
    this.selectedOrder = order;
    this.modal?.open();
  }

  orderIsDone(event: Event, order: AdminOrderInterface) {
    event.stopPropagation();
    this.selectedOrder = order;
    this.selectedOrder.isDone = !this.selectedOrder.isDone;
    this.doneSub$ = this.ordersService
      .patchIsDoneOrder(this.selectedOrder)
      .subscribe();
  }

  onDeleteOrder(event: Event, order: AdminOrderInterface) {
    event.stopPropagation();
    const decision = window.confirm(`Удалить заказ?`);
    if (decision) {
      this.ordersService.deleteOrder(order).subscribe(
        (response) => {
          const idx = this.orders!.findIndex((o) => o._id === order._id);
          this.orders!.splice(idx, 1);
          MaterialService.toast(response.message);
        },
        (error) => MaterialService.toast(error.error.message)
      );
    }
  }
}
