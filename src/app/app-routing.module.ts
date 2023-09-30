import { ComponentRef, EventEmitter, NgModule, Output } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { OrdersComponent } from './public/pages/order/orders/orders.component';
import { OrderInfoComponent } from './public/pages/order/order-info/order-info.component';
import { NewOrderComponent } from './public/pages/order/new-order/new-order.component';
import { ProfileComponent } from './public/pages/me/profile/profile.component';
import { SearchOrderComponent } from './public/pages/order/search-order/search-order.component';

const routes: Routes = [
  { path: "", redirectTo: "order/list", pathMatch: "full" },
  { path: "order/list", component: OrdersComponent },
  { path: "order/info", component: OrderInfoComponent },
  { path: "order/new", component: NewOrderComponent },
  { path: "order/search", component: SearchOrderComponent },
  { path: "me", component: ProfileComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
