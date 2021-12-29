import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Subscription } from 'rxjs';
import { PositionInterface } from 'src/app/categories/types/position.interface';
import {
  MaterialInstance,
  MaterialService,
} from 'src/app/shared/classes/material.service';

import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('carousel') carouselRef: ElementRef | undefined;
  positions: PositionInterface[] | undefined;
  carousel: MaterialInstance | undefined;
  interval: any;
  timerId: any;
  pSub$: Subscription | undefined;

  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.pSub$ = this.carouselService.fetchPromoImg().subscribe((positions) => {
      this.positions = positions;
      if (this.positions) {
        this.initCarousel();
      }
    });
  }

  carouselSetInterval() {
    this.interval = setInterval(() => {
      this.carousel?.next();
    }, 3000);
  }

  initCarousel() {
    this.timerId = setTimeout(() => {
      this.carousel = MaterialService.initializeCarousel(this.carouselRef!);
    }, 200);
  }

  ngAfterViewInit(): void {
    this.carouselSetInterval();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
    this.pSub$?.unsubscribe();
  }

  stopCarousel() {
    clearInterval(this.interval);
    clearInterval(this.timerId);
  }
}
