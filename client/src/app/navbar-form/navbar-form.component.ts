import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

import { Observable } from 'rxjs';

import {
  MaterialInstance,
  MaterialService
} from '../admin/shared/classes/material.service';
import { Category } from '../admin/shared/interfaces';
import { CategoriesService } from '../admin/shared/services/categories.service';
import { OrderService } from '../admin/shared/services/order.service';

@Component({
  selector: 'app-navbar-form',
  templateUrl: './navbar-form.component.html',
  styleUrls: ['./navbar-form.component.css'],
})
export class NavbarFormComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('sidenav') sidenavRef: ElementRef | undefined;
  categories$: Observable<Category[]> | undefined;
  category!: Category;

  sidenav: MaterialInstance | undefined;

  constructor(
    public order: OrderService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.fetch();
  }

  ngOnDestroy() {
    this.sidenav?.destroy();
  }

  ngAfterViewInit() {
    this.sidenav = MaterialService.initSidenav(this.sidenavRef!);
  }

  open() {
    this.sidenav?.open();
  }

  onCancel() {
    this.sidenav?.close();
  }

  get total(): number {
    let totalQuantity = JSON.parse(
      localStorage.getItem('totalQuantity') || '0'
    );
    return totalQuantity;
  }
}
