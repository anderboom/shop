import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import { MaterialService } from '../classes/material.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styles: [],
})
export class AdminLayoutComponent implements AfterViewInit {
  @ViewChild('floating') floatingRef: ElementRef | undefined;
  links = [
    { url: '/admin/categories', name: 'Добавить, изменить товар' },
    { url: '/admin/storage', name: 'Остатки по товарам' },
    { url: '/admin/order', name: 'Заказы' },
    { url: '/admin/history', name: 'История' },
    { url: '/admin/register', name: 'Добавить администратора' },
  ];
  constructor(private auth: AuthService, private router: Router) {}

  ngAfterViewInit() {
    MaterialService.initializeFloatingButton(this.floatingRef!);
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
