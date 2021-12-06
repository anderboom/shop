import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
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
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { CategoriesModule } from './categories/categories.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SearchModule } from './search/search.module';
import { UserTokenInterceptor } from './shared/classes/usertoken.interceptor';
import {
  AuthLayoutComponent,
} from './shared/layouts/auth-layout/auth-layout.component';
import {
  SiteLayoutComponent,
} from './shared/layouts/site-layout/site-layout.component';
import { FooterModule } from './shared/modules/footer/footer.module';
import { LoaderModule } from './shared/modules/loader/loader.module';
import { NavbarModule } from './shared/modules/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, SiteLayoutComponent],
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
    AuthModule,
    NavbarModule,
    FooterModule,
    LoaderModule,
    CategoriesModule,
    SearchModule,
    CartModule,
    DashboardModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: UserTokenInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
