import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import { PositionService } from 'src/app/categories/services/position.service';
import { MenuEnum } from 'src/app/shared/constants/constants.enum';

import { CartService } from '../../services/cart.service';
import { CartInterface } from '../../types/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @ViewChild('quantityInput') quantityInput: ElementRef | undefined;
  cart: CartInterface[] = [];
  totalCost = 0;
  main = MenuEnum.main;
  promo = MenuEnum.promo;

  constructor(
    private router: Router,
    private cartService: CartService,
    private positionsService: PositionService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
    this.totalCost = this.cartService.totalCost;
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  delete(position: CartInterface) {
    this.cartService.deleteCartItem(position);
    this.cart = this.cartService.getCartItems();
    this.totalCost = this.cartService.totalCost;
    if (this.cart.length === 0) {
      this.router.navigate(['/']);
    }
  }
}
