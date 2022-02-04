import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatdStatusComponent } from './components/catd-status/catd-status.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import {HttpClientModule} from '@angular/common/http';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchComponent } from './components/search/search.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CatdStatusComponent,
    CategoryItemsComponent,
    OrderItemsComponent,
    MenuComponent,
    SearchComponent,
    OrderDetailsComponent,
    PurchasesComponent,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
