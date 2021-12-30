import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { OrderService } from 'src/app/cart/services/order.service';
import { SearchService } from 'src/app/search/services/search.service';
import {
  MaterialInstance,
  MaterialService,
} from 'src/app/shared/classes/material.service';
import {
  PaginationStep,
  SortingEnum,
} from 'src/app/shared/constants/constants.enum';

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
  positions$: Observable<PositionInterface[]> | undefined;
  positionsByInc$: Observable<PositionInterface[]> | undefined;
  positionsByDec$: Observable<PositionInterface[]> | undefined;
  positionId: any = null;
  p: number = 1;
  paginationStep = PaginationStep.step;
  categoryName = '';
  increase: string = SortingEnum.increase;
  decrease: string = SortingEnum.decrease;

  constructor(
    private positionsService: PositionService,
    public orderService: OrderService,
    private categoriesService: CategoriesService,
    private cartService: CartService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.categoryName = this.categoriesService.categoryName;
    this.positions$ = this.positionsService.fetch(this.categoryId);
    this.positionsByInc$ = this.positionsService.fetchByIncrease(
      this.categoryId
    );
    this.positionsByDec$ = this.positionsService.fetchByDecrease(
      this.categoryId
    );
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

  onSelectPosition(position: PositionInterface) {
    this.positionId = position._id;
  }

  addToCart(position: PositionInterface) {
    this.cartService.addToCart(position);
    MaterialService.toast(`Товар додано до кошика!`);
    this.modal?.close();
  }

  get sortingSelected(): string {
    return this.searchService.sorting;
  }
}
