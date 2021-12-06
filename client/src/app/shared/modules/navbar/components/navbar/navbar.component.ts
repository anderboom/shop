import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Observable } from 'rxjs';
import {
  MaterialInstance,
  MaterialService,
} from 'src/app/admin/shared/classes/material.service';
import { Category } from 'src/app/admin/shared/interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';
import {
  CategoriesService,
} from 'src/app/categories/services/categories.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('sidenav') sidenavRef: ElementRef | undefined;
  categories$: Observable<Category[]> | undefined;
  category: Category | undefined;
  sidenav: MaterialInstance | undefined;

  constructor(
    private auth: AuthService,
    public order: CartService,
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

  get isAuth(): boolean {
    return !!localStorage.getItem('auth-token');
  }

  logout() {
    this.auth.logout();
  }
}
