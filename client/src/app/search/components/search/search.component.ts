import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  Observable,
  Subscription,
} from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { PositionInterface } from 'src/app/categories/types/position.interface';
import { SearchService } from 'src/app/search/services/search.service';
import {
  MaterialInstance,
  MaterialService,
} from 'src/app/shared/classes/material.service';
import {
  PaginationStep,
  SortingEnum,
} from 'src/app/shared/constants/constants.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @ViewChild('priceSelector') priceSelector: ElementRef | undefined;
  @ViewChild('brandSelector') brandSelector: ElementRef | undefined;
  @ViewChild('modal') modalRef: ElementRef | undefined;
  @ViewChild('quantityInput') quantityInput: ElementRef | undefined;
  modal: MaterialInstance | undefined;

  foundPositions$: Observable<PositionInterface[]> | undefined;
  brandSelectSub$: Subscription | undefined;
  sortPositionsMenu: string[] = [];
  brandNameArr: string[] = [];
  positionId: any = null;
  isFilter = false;
  loading = false;
  selectedBrand = '';
  p: number = 1;
  paginationStep = PaginationStep.step;
  searchStr = '';
  minLength = 3;
  sorting = '';
  timerId: any;

  constructor(
    private searchService: SearchService,
    public order: CartService
  ) {}

  ngOnInit(): void {
    this.sortPositionsMenu = [SortingEnum.increase, SortingEnum.decrease];
    this.brandSelectSub$ = this.searchService
      .getBrandNames()
      .subscribe((brands) => {
        this.brandNameArr = brands;
        if (this.brandNameArr) {
          this.initSelector();
          this.modal = MaterialService.initModal(this.modalRef!);
        }
      });
  }

  ngOnDestroy() {
    this.modal?.destroy();
    this.brandSelectSub$?.unsubscribe();
    this.setFilterMode(false);
    clearInterval(this.timerId);
  }

  ngAfterViewInit() {
    MaterialService.initSelect(this.priceSelector!);
    MaterialService.updateTextInputs;
    this.modal = MaterialService.initModal(this.modalRef!);
  }

  initSelector() {
    this.timerId = setTimeout(() => {
      MaterialService.initSelect(this.brandSelector!);
    }, 200);
  }

  searchHandleChange() {
    if (this.minLength <= this.searchStr.length) {
      this.foundPositions$ = this.searchService.fetch();
      this.setFilterMode(true);
    }
    if (this.minLength > this.searchStr.length) {
      this.setFilterMode(false);
    }
  }

  setFilterMode(isFilter: boolean) {
    this.isFilter = isFilter;
    this.searchService.isFilter = isFilter;
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
    this.order.addToCart(position);
    MaterialService.toast(`Товар додано до кошика!`);
    this.modal?.close();
  }

  brandSelect(event: any) {
    let value = event.target.value;
    this.selectedBrand = value;
    this.searchStr = '';
    this.foundPositions$ = this.searchService.selectedBrandFetch(
      this.selectedBrand
    );
    this.setFilterMode(true);
    if (value === '') {
      this.searchStr = '';
      this.setFilterMode(false);
    }
  }

  sortingSelect(event: any) {
    let value = event.target.value;
    this.searchService.sorting = value;
    this.searchStr = '';
  }
}
