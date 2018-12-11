import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { StopsFilterComponent } from './search-page/stops-filter/stops-filter.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    NotFoundPageComponent,
    StopsFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
