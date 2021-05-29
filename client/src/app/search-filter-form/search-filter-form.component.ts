import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from 'src/app/admin/shared/services/order.service';

import {
  MaterialInstance,
  MaterialService
} from '../admin/shared/classes/material.service';
import { Position } from '../admin/shared/interfaces';
import { PositionsService } from '../admin/shared/services/positions.service';
import { SearchService } from '../shared/services/search.service';

@Component({
  selector: 'app-search-filter-form',
  templateUrl: './search-filter-form.component.html',
  styleUrls: ['./search-filter-form.component.css'],
})
export class SearchFilterFormComponent
  implements OnInit, OnDestroy, AfterViewInit
{
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

  constructor(
    private searchService: SearchService,
    private positionsService: PositionsService,
    private router: Router,
    public order: OrderService
  ) {}

  ngOnInit(): void {
    this.sortByBrand();
    this.searchService.resetFilter();
  }

  ngOnDestroy() {
    this.modal?.destroy();
    this.modal1?.destroy();
  }

  ngAfterViewInit() {
    MaterialService.initSelect(this.priceSelector!);
    MaterialService.initSelect(this.brandSelector!);
    MaterialService.updateTextInputs;
    this.modal = MaterialService.initModal(this.modalRef!);
    this.modal1 = MaterialService.initModal(this.modal1Ref!);
  }

  handleChange() {
    if (this.minLength <= this.searchStr.length) {
      this.searchService.fetch().subscribe((positions) => {
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
