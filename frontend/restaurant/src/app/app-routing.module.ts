import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { PurchasesComponent } from './components/purchases/purchases.component';

const routes: Routes = [

  // http://localhost:4200/checkout
  {path: 'checkout', component:CheckOutComponent},

  // http://localhost:4200/purchases
   {path: 'purchases', component:PurchasesComponent},

  // http://localhost:4200/order/id
   {path: 'order/:id', component:OrderDetailsComponent},

  // http://localhost:4200/category/id
  {path: 'category/:id', component:OrderItemsComponent},

  // http://localhost:4200/category
  {path: 'category', component:OrderItemsComponent},

  // http://localhost:4200/orders/key
  {path: 'orders/:key', component:OrderItemsComponent},

  // http://localhost:4200/orders
  {path: 'orders', component:OrderItemsComponent},

  // http://localhost:4200/
  {path: '', redirectTo: '/orders',pathMatch: 'full'},

  // if user enter any thing without all routes
  {path: '**', redirectTo: '/orders',pathMatch: 'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
