import { Injectable } from '@angular/core';

import { OrderPositionInterface } from 'src/app/cart/types/order.interface';
import { PositionInterface } from 'src/app/categories/types/position.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: OrderPositionInterface[] = [];
  totalQuantity = 0;
  totalCost = 0;

  constructor() {
    this.getCartFromLocalStorage();
  }

  addToCart(position: PositionInterface) {
    const orderPosition: OrderPositionInterface = Object.assign(
      {},
      {
        name: position.name,
        cost: position.cost,
        quantity: position.quantity,
        imageSrc: position.imageSrc,
        orderQuantity: position.orderQuantity,
        _id: position._id,
      }
    );

    let candidate = this.cart.find((p) => p._id === position._id);
    if (candidate) {
      candidate.orderQuantity! += orderPosition.orderQuantity!;
    } else {
      this.cart.push(orderPosition);
    }
    this.totalQuantity += position.orderQuantity!;
    this.computeTotalPrice();
    this.setCartToLocalStorage();
  }

  setCartToLocalStorage() {
    localStorage.setItem('totalQuantity', JSON.stringify(this.totalQuantity));
    localStorage.setItem('cart', JSON.stringify(this.cart));
    localStorage.setItem('total', JSON.stringify(this.totalCost));
  }

  getCartFromLocalStorage() {
    let localTotalQuantity = JSON.parse(
      localStorage.getItem('totalQuantity') || '0'
    );
    if (localTotalQuantity) {
      this.totalQuantity = localTotalQuantity;
    }
    let totalOrderList: OrderPositionInterface[] = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );
    if (totalOrderList) {
      this.cart = totalOrderList;
    }
    if (this.totalCost) {
      this.totalCost = JSON.parse(localStorage.getItem('total') || '0');
    }
  }

  getCartItems() {
    return this.cart;
  }

  deleteCartItem(position: OrderPositionInterface) {
    const newCart = this.cart.filter((pos) => pos._id !== position._id);
    this.cart = newCart;
    this.computeTotalQuantity();
    this.computeTotalPrice();
    this.setCartToLocalStorage();
    if (this.totalQuantity === 0) {
      localStorage.removeItem('totalQuantity');
      localStorage.removeItem('cart');
      localStorage.removeItem('total');
    }
  }

  computeTotalQuantity() {
    return (this.totalQuantity = this.cart.reduce((total, item) => {
      return (total += item.orderQuantity!);
    }, 0));
  }
  computeTotalPrice() {
    return (this.totalCost = this.cart.reduce((total, item) => {
      return (total += item.orderQuantity! * item.cost);
    }, 0));
  }
}
