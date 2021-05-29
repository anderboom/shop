import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';

import { TokenInterceptor } from './admin/shared/classes/token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import {
  OrderFormComponent
} from './cart-page/order-form/order-form.component';
import {
  CategoriesFormComponent
} from './categories-page/categories-form/categories-form.component';
import {
  FilteredPositionFormComponent
} from './categories-page/categories-form/filtered-position-form/filtered-position-form.component';
import {
  PositionsFormComponent
} from './categories-page/categories-form/positions-form/positions-form.component';
import {
  CategoriesPageComponent
} from './categories-page/categories-page.component';
import { FooterFormComponent } from './footer-form/footer-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavbarFormComponent } from './navbar-form/navbar-form.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {
  SearchFilterFormComponent
} from './search-filter-form/search-filter-form.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import {
  AuthLayoutComponent
} from './shared/layouts/auth-layout/auth-layout.component';
import {
  SiteLayoutComponent
} from './shared/layouts/site-layout/site-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    RegisterPageComponent,
    SiteLayoutComponent,
    CartPageComponent,
    LoaderComponent,
    NavbarFormComponent,
    SearchFilterFormComponent,
    CategoriesPageComponent,
    CategoriesFormComponent,
    PositionsFormComponent,
    FooterFormComponent,
    OrderFormComponent,
    FilteredPositionFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule,
    TabViewModule,
    ToolbarModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
