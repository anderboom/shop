import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  LoaderMainComponent,
} from './components/loader-main/loader-main.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [LoaderComponent, LoaderMainComponent],
  imports: [CommonModule],
  exports: [LoaderComponent, LoaderMainComponent],
})
export class LoaderModule {}
