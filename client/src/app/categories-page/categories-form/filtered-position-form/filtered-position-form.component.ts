import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  MaterialInstance,
  MaterialService
} from 'src/app/admin/shared/classes/material.service';
import { Position } from 'src/app/admin/shared/interfaces';
import {
  CategoriesService
} from 'src/app/admin/shared/services/categories.service';
import { OrderService } from 'src/app/admin/shared/services/order.service';
import {
  PositionsService
} from 'src/app/admin/shared/services/positions.service';

@Component({
  selector: 'app-filtered-position-form',
  templateUrl: './filtered-position-form.component.html',
  styleUrls: ['./filtered-position-form.component.css'],
})
export class FilteredPositionFormComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input('categoryId') categoryId: string | undefined;
  @ViewChild('modal') modalRef: ElementRef | undefined;
  @ViewChild('quantityInput') quantityInput: ElementRef | undefined;

  modal: MaterialInstance | undefined;
  sortedPositions: Position[] = [];
  positionId: any = null;
  loading = false;
  totalQuantity = 0;
  p: number = 1;
  categoryName = '';

  constructor(
    private positionsService: PositionsService,
    public orderService: OrderService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.categoryName = this.categoriesService.categoryName;
    this.positionsService.fetch(this.categoryId).subscribe((positions) => {
      this.sortedPositions = positions.sort((a, b) =>
        a.cost > b.cost ? 1 : -1
      );
    });
    this.loading = false;
  }

  ngOnDestroy() {
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

  onSelectPosition(position: Position) {
    this.positionId = position._id;
    this.sortedPositions.map((position) => {
      position.orderQuantity = 1;
      return position;
    });
  }

  addToCart(position: Position) {
    this.orderService.addToCart(position);
    // this.totalQuantity = this.order.totalQuantity;
    MaterialService.toast(`Товар додано до кошика!`);
    this.modal?.close();
  }
}
