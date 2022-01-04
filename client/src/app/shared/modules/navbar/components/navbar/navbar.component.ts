import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import {
  AdminCategoryInterface,
} from 'src/app/admin/admin-categories/types/admin-categories.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import {
  CategoriesService,
} from 'src/app/categories/services/categories.service';
import {
  MaterialInstance,
  MaterialService,
} from 'src/app/shared/classes/material.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('sidenav') sidenavRef: ElementRef | undefined;

  categories$: Observable<AdminCategoryInterface[]> | undefined;
  category: AdminCategoryInterface | undefined;
  sidenav: MaterialInstance | undefined;

  constructor(
    private authService: AuthService,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.fetch();
  }

  ngOnDestroy() {
    this.sidenav?.destroy();
  }

  ngAfterViewInit() {
    if (!this.isAuthAdmin) {
      this.sidenav = MaterialService.initSidenav(this.sidenavRef!);
    }
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

  get isAuthAdmin(): boolean {
    return !!localStorage.getItem('auth-token-admin');
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
