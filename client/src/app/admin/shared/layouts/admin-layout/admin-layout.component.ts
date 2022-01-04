import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import { MaterialService } from '../../../../shared/classes/material.service';
import {
  AdminAuthService,
} from '../../../admin-auth/services/admin-auth.service';
import {
  AdminMenuEnum,
  AdminMenuUrlEnum,
} from '../../admin.constants/admin.constants.enum';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styles: [],
})
export class AdminLayoutComponent implements AfterViewInit {
  @ViewChild('floating') floatingRef: ElementRef | undefined;
  links = [
    { url: AdminMenuUrlEnum.categoriesUrl, name: AdminMenuEnum.categories },
    { url: AdminMenuUrlEnum.promoUrl, name: AdminMenuEnum.promo },
    { url: AdminMenuUrlEnum.storageUrl, name: AdminMenuEnum.storage },
    { url: AdminMenuUrlEnum.ordersUrl, name: AdminMenuEnum.orders },
    { url: AdminMenuUrlEnum.registerUrl, name: AdminMenuEnum.register },
  ];
  constructor(private auth: AdminAuthService, private router: Router) {}

  ngAfterViewInit() {
    MaterialService.initializeFloatingButton(this.floatingRef!);
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
