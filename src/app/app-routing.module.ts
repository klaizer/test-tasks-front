import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchPageComponent} from './search-page/search-page.component';
import {NotFoundPageComponent} from './views/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchPageComponent},

  {path: '404', component: NotFoundPageComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
