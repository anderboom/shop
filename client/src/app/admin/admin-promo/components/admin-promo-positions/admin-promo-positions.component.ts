import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { MaterialService } from 'src/app/shared/classes/material.service';

import {
  AdminPromoPositionsService,
} from '../../services/admin-promo-positions.service';
import {
  AdminPromoPositionInterface,
} from '../../types/admin-promo-postion.interface';

@Component({
  selector: 'app-admin-promo-positions',
  templateUrl: './admin-promo-positions.component.html',
  styleUrls: ['./admin-promo-positions.component.css'],
})
export class AdminPromoPositionsComponent implements OnInit, OnDestroy {
  @Input('categoryId') categoryId: string | undefined;
  @Input('positions') promoPositions: AdminPromoPositionInterface[] = [];
  positionId: any = null;
  loading = false;
  // promoPositions: AdminPromoPositionInterface[] = [];
  positionSub$: Subscription | undefined;
  constructor(
    private promoPositionsService: AdminPromoPositionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.positionSub$ = this.promoPositionsService
      .fetchByCategory(this.categoryId)
      .subscribe((positions) => {
        this.promoPositions = positions;
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.positionSub$?.unsubscribe();
  }

  addToMain(event: Event, position: AdminPromoPositionInterface) {
    const newPosition: AdminPromoPositionInterface = {
      name: position.name,
      cost: position.cost,
      category: this.categoryId!,
      description: position.description,
      quantity: position.quantity,
      inputCost: position.inputCost,
      promoCost: position.promoCost,
      brand: position.brand,
      imageSrc: position.imageSrc,
      _id: position._id,
      groupPages: 'main',
    };
    event.stopPropagation();
    const decision = window.confirm(`Добавить позицию в Главное меню?`);
    if (decision) {
      this.positionSub$ = this.promoPositionsService
        .updateToMain(newPosition)
        .subscribe(
          () => {
            MaterialService.toast(
              `Позиция ${position.name} помещена в Главное меню`
            );
          },
          (error) => {
            MaterialService.toast(error.error.message);
          },
          () => this.reloadCurrentPage()
        );
    }
  }

  reloadCurrentPage() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
