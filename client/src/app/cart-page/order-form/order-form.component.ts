import {
  AfterViewInit,
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
import { MaterialService } from 'src/app/admin/shared/classes/material.service';
import { OrderPosition } from 'src/app/admin/shared/interfaces';
import { OrderService } from 'src/app/admin/shared/services/order.service';
import { AuthclientService } from 'src/app/shared/services/authclient.service';
import { NovaposhtaService } from 'src/app/shared/services/novaposhta.service';

type UserType = 'sender';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit, AfterViewInit {
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
    number: new FormControl(null, Validators.required),
    email: new FormControl(null),
    comment: new FormControl(null),
  });

  orders: OrderPosition[] = [];
  totalCost = 0;
  paymentList: any;
  deliveryList: any;
  isNovaPoshta = false;
  novaposhtaResponse: any;
  area: any;
  city: any;
  department: any;

  constructor(
    private router: Router,
    private ordersService: OrderService,
    private novaposhta: NovaposhtaService,
    private auth: AuthclientService
  ) {}

  ngOnInit(): void {
    this.auth.logout();
    localStorage.removeItem('auth-token');
    this.orders = this.ordersService.list;
    this.totalCost = this.ordersService.totalCost;
    let totalOrder: OrderPosition[] = JSON.parse(
      localStorage.getItem('cart') || '{}'
    );
    let sumTotalCost = JSON.parse(localStorage.getItem('total') || '0');
    this.orders = totalOrder;
    this.totalCost = sumTotalCost;
    // this.getAreas();
    this.deliveryList = [
      // { id: 1, name: 'Самовивіз зі складу' },
      { id: 2, name: 'Нова пошта' },
    ];
    this.paymentList = [
      { id: 1, name: 'Готівкою' },
      { id: 2, name: 'Оплата на карту' },
      { id: 3, name: 'Післяплата "Нова Пошта"' },
    ];
  }

  ngAfterViewInit() {
    this.getAreas();
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

    type Order = {
      payment: string;
      delivery: string;
      area?: string;
      city?: string;
      department?: string;
      firstName: string;
      secondName: string;
      number: string;
      email?: string;
      comment?: string;
      orders: OrderPosition[];
      totalCost: number;
    };

    const order: Order = {
      payment: this.form.value.payment,
      delivery: this.form.value.delivery,
      area: this.area.label,
      city: this.city.label,
      department: this.department.label,
      firstName: this.form.value.firstName,
      secondName: this.form.value.secondName,
      number: this.form.value.number,
      email: this.form.value.email,
      comment: this.form.value.comment,
      orders: this.orders,
      totalCost: this.totalCost,
    };
    console.log(order);
    MaterialService.toast(
      'Дякуємо за замовлення! Наш оператор зв`яжеться з Вами найближчим часом.'
    );
    localStorage.clear();
    this.ordersService.totalCost = 0;
    this.ordersService.totalQuantity = 0;
    this.ordersService.list = [];
    this.router.navigate(['/']);
  }

  onCancel() {
    this.router.navigate(['/cart']);
  }

  deliverySelected(value: any) {
    this.novaPoshtaSelected(value);
  }

  novaPoshtaSelected(value: any) {
    if (value == 'Нова пошта') {
      this.isNovaPoshta = true;
    } else {
      this.isNovaPoshta = false;
    }
  }

  get f() {
    return this.form.controls;
  }
}
