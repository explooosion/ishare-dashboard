import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { HomeComponent } from './container/home/home.component';
import { ChildComponent } from './container/child/child.component';
import { ExchangeComponent } from './container/exchange/exchange.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'child', component: ChildComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
