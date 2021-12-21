import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';

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

  constructor(private ordersService: AdminOrdersService) {}

  ngAfterViewInit(): void {
    this.modal = MaterialService.initModal(this.modalRef!);
  }

  ngOnDestroy(): void {
    this.modal?.destroy();
  }

  closeModal() {
    this.modal?.close();
  }

  onSelectOrder(order: AdminOrderInterface) {
    this.selectedOrder = order;
    this.modal?.open();
  }

  onDeleteOrder(event: Event, order: AdminOrderInterface) {
    this.ordersService.delete(order).subscribe(
      (response) => {
        const idx = this.orders!.findIndex((o) => o._id === order._id);
        this.orders!.splice(idx, 1);
        MaterialService.toast(response.message);
      },
      (error) => MaterialService.toast(error.error.message)
    );
  }
}
