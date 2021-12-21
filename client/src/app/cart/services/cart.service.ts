import { Injectable } from '@angular/core';

import { PositionInterface } from 'src/app/categories/types/position.interface';
import { MenuEnum } from 'src/app/shared/constants/constants.enum';

import { CartInterface } from '../types/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartInterface[] = [];
  totalQuantity = 0;
  totalMain = 0;
  totalPromo = 0;
  totalCost = 0;
  main = MenuEnum.main;
  promo = MenuEnum.promo;

  constructor() {
    this.getCartItemsFromLocalStorage();
  }
  addToCart(position: PositionInterface) {
    const cartPosition: CartInterface = Object.assign(
      {},
      {
        name: position.name,
        cost: position.cost,
        promoCost: position.promoCost,
        quantity: position.quantity,
        imageSrc: position.imageSrc,
        orderQuantity: position.orderQuantity,
        groupPages: position.groupPages,
        _id: position._id,
      }
    );

    let candidate = this.cart.find((p) => p._id === position._id);
    if (candidate) {
      candidate.orderQuantity! += cartPosition.orderQuantity!;
    } else {
      this.cart.push(cartPosition);
    }
    this.totalQuantity += position.orderQuantity!;
    this.computeTotalPrice(cartPosition);
    this.setCartItemsToLocalStorage();
  }

  setCartItemsToLocalStorage() {
    localStorage.setItem('totalQuantity', JSON.stringify(this.totalQuantity));
    localStorage.setItem('cart', JSON.stringify(this.cart));
    localStorage.setItem('total', JSON.stringify(this.totalCost));
  }

  getCartItemsFromLocalStorage() {
    this.totalQuantity = JSON.parse(
      localStorage.getItem('totalQuantity') || '0'
    );
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.totalCost = JSON.parse(localStorage.getItem('total') || '0');
  }

  getCartItems() {
    return this.cart;
  }

  deleteCartItem(position: CartInterface) {
    this.cart.splice(this.cart.indexOf(position), 1);
    this.computeTotalQuantityAfterDelete(position);
    this.computeTotalQuantity();
    this.setCartItemsToLocalStorage();
    if (this.cart.length === 0) {
      localStorage.removeItem('totalQuantity');
      localStorage.removeItem('cart');
      localStorage.removeItem('total');
    }
  }

  computeTotalQuantityAfterDelete(position: CartInterface) {
    if (position.groupPages === this.main) {
      this.totalMain =
        this.totalMain - position.orderQuantity! * position.cost!;
    }
    if (position.groupPages === this.promo) {
      this.totalPromo =
        this.totalPromo - position.orderQuantity! * position.promoCost!;
    }
    this.totalCost = this.totalMain + this.totalPromo;
  }
  computeTotalQuantity() {
    return (this.totalQuantity = this.cart.reduce((total, item) => {
      return (total += item.orderQuantity!);
    }, 0));
  }
  computeTotalPrice(position: CartInterface) {
    if (position.groupPages === this.main) {
      this.totalMain =
        this.totalMain + position.orderQuantity! * position.cost!;
    }
    if (position.groupPages === this.promo) {
      this.totalPromo =
        this.totalPromo + position.orderQuantity! * position.promoCost!;
    }
    this.totalCost = this.totalMain + this.totalPromo;
  }

  resetCart() {
    localStorage.removeItem('totalQuantity');
    localStorage.removeItem('cart');
    localStorage.removeItem('total');
    this.totalQuantity = 0;
    this.totalMain = 0;
    this.totalPromo = 0;
    this.totalCost = 0;
    this.cart = [];
  }
}
