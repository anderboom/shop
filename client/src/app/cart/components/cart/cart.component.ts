import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../../shared/services/cart.service';
import { OrderPositionInterface } from '../../types/order.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @ViewChild('quantityInput') quantityInput: ElementRef | undefined;
  cart: OrderPositionInterface[] = [];
  totalCost = 0;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
    this.totalCost = this.cartService.totalCost;
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  delete(position: OrderPositionInterface) {
    this.cartService.deleteCartItem(position);
    this.cart = this.cartService.getCartItems();
    this.totalCost = this.cartService.totalCost;
  }
}
