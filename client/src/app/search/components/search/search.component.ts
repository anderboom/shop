import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { Subscription } from 'rxjs';
import {
  MaterialInstance,
  MaterialService,
} from 'src/app/admin/shared/classes/material.service';
import { PositionInterface } from 'src/app/categories/types/position.interface';
import { SearchService } from 'src/app/search/services/search.service';
import { CartService } from 'src/app/shared/services/cart.service';

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
  searchStr = '';
  minLength = 3;
  foundPositions: PositionInterface[] = [];
  positionId: any = null;
  isFilter = false;
  price = '';
  loading = false;
  // totalQuantity = 0;
  brandNameArr: string[] = [];
  selectedBrand = '';
  p: number = 1;
  brandSub$: Subscription | undefined;
  brandSelectSub$: Subscription | undefined;
  searchSub$: Subscription | undefined;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute,
    public order: CartService
  ) {}

  ngOnInit(): void {
    this.sortByBrand();
  }

  ngOnDestroy() {
    this.modal?.destroy();
    this.searchSub$?.unsubscribe();
    this.brandSub$?.unsubscribe();
    this.brandSelectSub$?.unsubscribe();
  }

  ngAfterViewInit() {
    MaterialService.initSelect(this.priceSelector!);
    MaterialService.initSelect(this.brandSelector!);
    MaterialService.updateTextInputs;
    this.modal = MaterialService.initModal(this.modalRef!);
  }

  searchHandleChange() {
    this.searchValidate();
    if (this.minLength <= this.searchStr.length) {
      this.searchSub$ = this.searchService.fetch().subscribe((positions) => {
        this.foundPositions = positions;
        this.setFilterMode(true);
      });
    }
    if (this.minLength > this.searchStr.length) {
      this.foundPositions = [];
      this.setFilterMode(false);
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.searchSub$?.unsubscribe();
    }
  }

  searchValidate() {
    if (this.searchStr.length === 1) {
      MaterialService.toast('Введіть не менше 3 символів');
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

  unsubscribeFilter() {}
  onSelectPosition(position: PositionInterface) {
    this.positionId = position._id;
    this.foundPositions.map((position) => {
      position.orderQuantity = 1;
      return position;
    });
  }

  addToCart(position: PositionInterface) {
    this.order.addToCart(position);
    MaterialService.toast(`Товар додано до кошика!`);
    this.modal?.close();
  }
  sortByBrand() {
    this.brandSub$ = this.searchService.fetch().subscribe((positions) => {
      this.foundPositions = positions;
      this.foundPositions.forEach((p) => {
        this.brandNameArr.push(p.brand!);
        this.brandNameArr = Array.from(new Set(this.brandNameArr));
      });
    });
  }

  brandSelect(event: any) {
    let value = event.target.value;
    this.selectedBrand = value;
    this.setFilterMode(true);
    this.searchSub$?.unsubscribe();
    this.brandSub$?.unsubscribe();
    this.brandSelectSub$ = this.searchService.fetch().subscribe((positions) => {
      this.foundPositions = positions.filter(
        (p) => p.brand === this.selectedBrand
      );
    });
  }

  priceSelect(event: any) {
    let value = event.target.value;
    this.isFilter = value;
  }
}
