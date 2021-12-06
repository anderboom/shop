import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Subscription } from 'rxjs';
import {
  MaterialInstance,
  MaterialService,
} from 'src/app/admin/shared/classes/material.service';
import { OrderService } from 'src/app/cart/services/order.service';
import { CartService } from 'src/app/shared/services/cart.service';

import { CategoriesService } from '../../services/categories.service';
import { PositionService } from '../../services/position.service';
import { PositionInterface } from '../../types/position.interface';

@Component({
  selector: 'app-positions-form',
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.css'],
})
export class PositionsFormComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input('categoryId') categoryId: string | undefined;
  @ViewChild('modal') modalRef: ElementRef | undefined;
  @ViewChild('quantityInput') quantityInput: ElementRef | undefined;

  modal: MaterialInstance | undefined;
  positions: PositionInterface[] = [];
  sortedPositions: PositionInterface[] = [];
  positionId: any = null;
  loading = false;
  totalQuantity = 0;
  p: number = 1;
  categoryName = '';
  positionSub: Subscription | undefined;

  constructor(
    private positionsService: PositionService,
    public orderService: OrderService,
    private categoriesService: CategoriesService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.categoryName = this.categoriesService.categoryName;
    this.positionSub = this.positionsService
      .fetch(this.categoryId)
      .subscribe((positions) => {
        this.positions = positions;
      });
    this.loading = false;
  }

  ngOnDestroy() {
    if (this.positionSub) {
      this.positionSub?.unsubscribe();
    }
    this.modal?.destroy();
  }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef!);
  }

  open() {
    this.modal?.open();
  }

  onCancel() {
    this.modal?.close();
  }

  onSelectPosition(position: PositionInterface) {
    this.positionId = position._id;
    this.positions.map((position) => {
      position.orderQuantity = 1;
      return position;
    });
  }

  addToCart(position: PositionInterface) {
    this.cartService.addToCart(position);
    MaterialService.toast(`Товар додано до кошика!`);
    this.modal?.close();
  }
}
