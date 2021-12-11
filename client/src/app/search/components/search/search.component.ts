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

import {
  Observable,
  Subscription,
} from 'rxjs';
import {
  MaterialInstance,
  MaterialService,
} from 'src/app/admin/shared/classes/material.service';
import {
  CategoryInterface,
} from 'src/app/categories/types/catergory.interface';
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
  foundPositions$: Observable<PositionInterface[]> | undefined;
  foundPositionsArr: PositionInterface[] = [];
  positionId: any = null;
  isFilter = false;
  isSorted = false;
  price = '';
  loading = false;
  brandNameArr: string[] = [];
  selectedBrand = '';
  p: number = 1;
  brandSelectSub$: Subscription | undefined;
  category: CategoryInterface | undefined;
  categoryId: any;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute,
    public order: CartService
  ) {}

  ngOnInit(): void {
    this.brandSelectSub$ = this.searchService
      .getBrandNames()
      .subscribe((brands) => (this.brandNameArr = brands));
  }

  ngOnDestroy() {
    this.modal?.destroy();
    this.brandSelectSub$?.unsubscribe();
    this.setFilterMode(false, false);
  }

  ngAfterViewInit() {
    MaterialService.initSelect(this.priceSelector!);
    MaterialService.initSelect(this.brandSelector!);
    MaterialService.updateTextInputs;
    this.modal = MaterialService.initModal(this.modalRef!);
  }

  searchHandleChange() {
    if (this.minLength <= this.searchStr.length) {
      this.foundPositions$ = this.searchService.fetch();
      this.setFilterMode(true, false);
    }
    if (this.minLength > this.searchStr.length) {
      this.setFilterMode(false, false);
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
    }
  }

  setFilterMode(isFilter: boolean, isSorted: boolean) {
    this.isFilter = isFilter;
    this.searchService.isFilter = isFilter;
    this.isSorted = isSorted;
    this.searchService.isSorted = isSorted;
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
    this.setFilterMode(true, false);
    this.searchStr = '';
    this.foundPositions$ = this.searchService.selectedBrandFetch(
      this.selectedBrand
    );
  }

  priceSelect(event: any) {
    let value = event.target.value;
    this.isSorted = value;
    this.searchStr = '';
    this.setFilterMode(true, this.isSorted);
  }
}
