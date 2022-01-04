import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { SelectItem } from 'primeng/api';
import { CartService } from 'src/app/cart/services/cart.service';
import { MaterialService } from 'src/app/shared/classes/material.service';
import {
  DeliveryEnum,
  PaymentEnum,
} from 'src/app/shared/constants/constants.enum';

import { NovaposhtaService } from '../../services/novaposhta.service';
import { OrderService } from '../../services/order.service';
import { CartInterface } from '../../types/cart.interface';
import {
  DeliveryInterface,
  OrderInterface,
  UserDataInterface,
} from '../../types/order.interface';

type UserType = 'sender';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  @ViewChild('paymentSelector') select1Ref: ElementRef | undefined;
  @ViewChild('deliverySelector') select2Ref: ElementRef | undefined;

  public areasSender: SelectItem[] | undefined;
  public areasRecipient: SelectItem[] | undefined;
  public citiesSender: SelectItem[] | undefined;
  public citiesRecipient: SelectItem[] | undefined;
  public departmentsSender: SelectItem[] | undefined;
  public departmentsRecipient: SelectItem[] | undefined;
  public isDisableSenderDropdownCity: boolean = true;
  public isDisableRecipientDropdownCity: boolean = true;
  public isDisableRecipientDropdownDepartment: boolean = true;
  public isDisableSenderDropdownDepartment: boolean = true;

  form = new FormGroup({
    payment: new FormControl('', Validators.required),
    delivery: new FormControl('', Validators.required),
    area: new FormControl(''),
    city: new FormControl(''),
    department: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    secondName: new FormControl('', Validators.required),
    phoneNumber: new FormControl(null, Validators.required),
    email: new FormControl(null),
    comment: new FormControl(null),
  });

  cart: CartInterface[] = [];
  totalCost = 0;
  paymentList: any;
  deliveryList: any;
  isNovaPoshta = false;
  novaposhtaResponse: any;
  area: any;
  city: any;
  department: any;
  dateNow = new Date();
  // orderNumber = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService,
    private novaposhta: NovaposhtaService
  ) {}

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '{}');
    this.totalCost = JSON.parse(localStorage.getItem('total') || '0');

    this.deliveryList = [{ id: 1, name: DeliveryEnum.novaposhta }];
    this.paymentList = [
      { id: 1, name: PaymentEnum.cash },
      { id: 2, name: PaymentEnum.card },
      { id: 3, name: PaymentEnum.postpay },
    ];
  }

  ngAfterViewInit() {
    MaterialService.initSelect(this.select1Ref!);
    MaterialService.initSelect(this.select2Ref!);
    MaterialService.updateTextInputs;
  }

  public getAreas() {
    this.novaposhta.getAreas().subscribe((response: any) => {
      this.areasSender = response.data.map((area: any) => ({
        label: area.Description,
        value: area.Ref,
      }));
      this.areasSender = this.areasSender?.slice(1);
      this.areasRecipient = [...this.areasSender!];
    });
  }

  public getCities(ref: string, type?: UserType) {
    this.novaposhta.getCities(ref).subscribe((response: any) => {
      const arr = response.data.map((city: any) => ({
        label: city.Description,
        value: city.Ref,
      }));

      type == 'sender'
        ? (this.citiesSender = arr)
        : (this.citiesRecipient = arr);
      type == 'sender'
        ? (this.isDisableSenderDropdownCity = false)
        : (this.isDisableRecipientDropdownCity = false);
    });
  }

  public getDepartments(ref: string, type?: UserType) {
    this.novaposhta.getDepartments(ref).subscribe((response: any) => {
      const arr = response.data.map((department: any) => ({
        label: department.Description,
        value: department.Ref,
      }));
      type == 'sender'
        ? (this.departmentsSender = arr)
        : (this.departmentsRecipient = arr);
      type == 'sender'
        ? (this.isDisableSenderDropdownDepartment = false)
        : (this.isDisableRecipientDropdownDepartment = false);
    });
  }

  onSubmit() {
    this.area = this.areasSender?.find((a) => a.value == this.form.value.area);
    this.city = this.citiesSender?.find((c) => c.value == this.form.value.city);
    this.department = this.departmentsSender?.find(
      (d) => d.value == this.form.value.department
    );
    const delivery: DeliveryInterface = {
      payment: this.form.value.payment,
      deliveryName: this.form.value.delivery,
      area: this.area.label,
      city: this.city.label,
      department: this.department.label,
    };

    const userData: UserDataInterface = {
      firstName: this.form.value.firstName,
      secondName: this.form.value.secondName,
      phoneNumber: this.form.value.phoneNumber,
      email: this.form.value.email,
      comment: this.form.value.comment,
    };

    const newOrder: OrderInterface = {
      delivery: delivery,
      userData: userData,
      cart: this.cart,
      totalCost: this.totalCost,
    };

    this.orderService.createOrder(newOrder).subscribe(
      (order) => {
        console.log(order);
        MaterialService.toast(
          "Дякуємо за замовлення! Наш оператор зв'яжеться з Вами найближчим часом."
        );
      },
      (error) => {
        MaterialService.toast(error.error.message);
      },
      () => this.clearOrder()
    );
  }

  clearOrder() {
    this.cartService.resetCart();
    this.router.navigate(['/']);
  }

  onCancel() {
    this.router.navigate(['/cart']);
  }

  deliverySelected(value: any) {
    this.novaPoshtaSelected(value);
  }

  novaPoshtaSelected(value: any) {
    if (value == DeliveryEnum.novaposhta) {
      this.isNovaPoshta = true;
      this.getAreas();
    } else {
      this.isNovaPoshta = false;
    }
  }

  reloadCurrentPage() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  get f() {
    return this.form.controls;
  }
}
