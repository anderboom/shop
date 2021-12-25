import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  Observable,
  Subscription,
} from 'rxjs';
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

  carouselSub$: Subscription | undefined;
  positions: PositionInterface[] = [];
  carousel: MaterialInstance | undefined;
  interval: any;
  timerId: any;
  loading = false;
  newImageSrc: string = '';
  imgPositions$: Observable<string[]> | undefined;
  imgPositions: string[] = [];

  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.carouselService
      .fetchPromoImg()
      .subscribe((positions) => (this.imgPositions = positions));
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
    this.initCarousel();
    this.carouselSetInterval();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  stopCarousel() {
    clearInterval(this.interval);
    clearInterval(this.timerId);
  }
}
