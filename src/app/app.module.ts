import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeRuUA from '@angular/common/locales/ru-UA';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';
import { StopsFilterComponent } from './search-page/stops-filter/stops-filter.component';
import { SharedModule } from './shared/shared.module';
import { CurrencyFilterComponent } from './search-page/currency-filter/currency-filter.component';
import { CardListComponent } from './search-page/card-list/card-list.component';

registerLocaleData(localeRuUA);

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    NotFoundPageComponent,
    StopsFilterComponent,
    CurrencyFilterComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-UA' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
