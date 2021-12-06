import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import {
  MaterialInstance,
  MaterialService,
} from 'src/app/admin/shared/classes/material.service';
import { Position } from 'src/app/admin/shared/interfaces';
import { PositionService } from 'src/app/categories/services/position.service';
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
  @ViewChild('modal1') modal1Ref: ElementRef | undefined;
  @ViewChild('quantityInput') quantityInput: ElementRef | undefined;
  modal: MaterialInstance | undefined;
  modal1: MaterialInstance | undefined;
  searchStr = '';
  minLength = 3;
  foundPositions: Position[] = [];
  brandPositions: Position[] = [];
  positionId: any = null;
  isSearch = false;
  isBrand = false;
  isPrice = false;
  loading = false;
  totalQuantity = 0;
  brandNameArr: string[] = [];
  brandSelected = '';
  p: number = 1;
  searchSub: Subscription | undefined;

  constructor(
    private searchService: SearchService,
    private positionsService: PositionService,
    private router: Router,
    public order: CartService
  ) {}

  ngOnInit(): void {
    this.sortByBrand();
    this.searchService.resetFilter();
  }

  ngOnDestroy() {
    this.modal?.destroy();
    this.modal1?.destroy();
    if (this.searchSub) {
      this.searchSub.unsubscribe();
    }
  }

  ngAfterViewInit() {
    MaterialService.initSelect(this.priceSelector!);
    MaterialService.initSelect(this.brandSelector!);
    MaterialService.updateTextInputs;
    if (this.modal !== undefined) {
      this.modal = MaterialService.initModal(this.modalRef!);
    }
    if (this.modal1 !== undefined) {
      this.modal1 = MaterialService.initModal(this.modal1Ref!);
    }
  }

  handleChange() {
    if (this.minLength <= this.searchStr.length) {
      this.searchSub = this.searchService.fetch().subscribe((positions) => {
        this.foundPositions = positions;
        this.isSearch = true;
        this.searchService.isSearch = this.isSearch;
        this.isBrand = false;
        this.isPrice = false;
        this.searchService.isBrand = this.isBrand;
        this.searchService.isPrice = this.isPrice;
      });
    }
    if (this.minLength > this.searchStr.length) {
      this.searchService.fetch().subscribe((positions) => {
        this.foundPositions = [];
        this.isSearch = false;
        this.searchService.isSearch = this.isSearch;
      });
    }
  }

  setDefaultBrand() {}

  open() {
    this.modal?.open();
  }
  open1() {
    this.modal1?.open();
  }

  onCancel() {
    this.modal?.close();
  }
  onCancel1() {
    this.modal1?.close();
  }

  onSelectFoundPosition(position: Position) {
    this.positionId = position._id;
    this.foundPositions.map((position) => {
      position.orderQuantity = 1;
      return position;
    });
  }
  onSelectBrandPosition(position: Position) {
    this.positionId = position._id;
    this.brandPositions.map((position) => {
      position.orderQuantity = 1;
      return position;
    });
  }

  addToCart(position: Position) {
    this.order.addToCart(position);
    // this.totalQuantity = this.order.totalQuantity;
    MaterialService.toast(`Товар додано до кошика!`);
    this.modal?.close();
    this.modal1?.close();
  }

  sortByBrand() {
    this.searchService.fetch().subscribe((positions) => {
      this.brandPositions = positions;
      this.brandPositions.forEach((p) => {
        this.brandNameArr.push(p.brand!);
        this.brandNameArr = Array.from(new Set(this.brandNameArr));
      });
    });
  }

  brandSelect(event: any) {
    let value = event.target.value;
    this.brandSelected = value;
    this.isBrand = true;
    this.searchService.isBrand = this.isBrand;
    this.isPrice = false;
    this.isSearch = false;
    this.searchService.isSearch = this.isSearch;
    this.searchService.isPrice = this.isPrice;
  }

  isPriceSelect(event: any) {
    let value = event.target.value;
    this.isPrice = value;
    this.searchService.isPrice = this.isPrice;
    this.isBrand = false;
    this.isSearch = false;
    this.searchService.isBrand = this.isBrand;
    this.searchService.isSearch = this.isSearch;
  }
}
