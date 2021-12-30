import {
  Component,
  ElementRef,
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

import { PositionService } from '../../services/position.service';
import { PositionInterface } from '../../types/position.interface';

@Component({
  selector: 'app-promo-positions',
  templateUrl: './promo-positions.component.html',
  styleUrls: ['./promo-positions.component.css'],
})
export class PromoPositionsComponent implements OnInit {
  @ViewChild('modal') modalRef: ElementRef | undefined;
  @ViewChild('quantityInput') quantityInput: ElementRef | undefined;

  modal: MaterialInstance | undefined;
  promoPositions$: Observable<PositionInterface[]> | undefined;
  promoPositionsByInc$: Observable<PositionInterface[]> | undefined;
  promoPositionsByDec$: Observable<PositionInterface[]> | undefined;
  positionId: any = null;
  p: number = 1;
  paginationStep = PaginationStep.step;
  increase = SortingEnum.increase;
  decrease = SortingEnum.decrease;

  constructor(
    private positionsService: PositionService,
    public orderService: OrderService,
    private cartService: CartService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.promoPositions$ = this.positionsService.fetchPromo();
    this.promoPositionsByInc$ = this.positionsService.fetchPromoByIncrease();
    this.promoPositionsByDec$ = this.positionsService.fetchPromoByDecrease();
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

  addToCart(position: PositionInterface): void {
    this.cartService.addToCart(position);
    MaterialService.toast(`Товар додано до кошика!`);
    this.modal?.close();
  }

  get sortingSelected(): string {
    return this.searchService.sorting;
  }
}
